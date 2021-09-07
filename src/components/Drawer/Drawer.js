import Info from "../Info"
import React from "react"
import styles from './Drawer.module.scss'

import axios from "axios"
import { useCart } from "../hooks/useCart"



function Drawer({items = [], onClickOpen, onRemove, opened}) {
  const {onDrawerAdd, setOnDrawerAdd, totalPrice} = useCart()
 
  const delay = (ms) => 
    new Promise ((resolve) => setTimeout(resolve, ms))
  
  const [orderId, setIsOrderId] = React.useState(null)
  const[isOrderComplete, setIsOrderComplete] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const onClickOrder = async() => 

  {
    try {
      setIsLoading(true)
      const {data} = await axios.post('https://612bde9dab461c00178b5bb9.mockapi.io/orders', {items : onDrawerAdd})
      setIsOrderId(data.id)
      setIsOrderComplete(true);
      setOnDrawerAdd([])

      for (let i = 0 ; i <  onDrawerAdd.length ;i++) {
        const item  = onDrawerAdd[i];
        await axios.delete(`https://612bde9dab461c00178b5bb9.mockapi.io/drawer/${item.id}`)
        delay(2000)
      }
    
    } catch (error) {
      alert("Не удалось оформить заказ :(")
    }
    setIsLoading(false)
    console.log(onDrawerAdd)
  }


    return(
 
      //      <div className = {`${styles.overlay } ${opened ? styles.overlayVisible : ''} `}>
      //  <div className = " styles.drawer d-flex" >
      <div className = {`${styles.overlay} ${opened ? styles.overlayVisible : ''}`} >
         <div className = {styles.drawer}>
<h2 className = "mb-30 d-flex justify-between ">Корзина 
<img className =  "removeBtn cu-p " id = 'but'
     onClick ={onClickOpen}
     src = "/img/btn-remove.svg"
     alt = "remove"/></h2>

   {items.length > 0 ? (
     <div className = "d-flex flex-column " >
     <div className = "items">
      {items.map((obj) => (
           <div key = {obj.id}className ="cartItem d-flex align-center mb-20">
           <div
            style = {{backgroundImage:`url(${obj.cardImg})`}}
            className = "cartImage"></div>
         <div className = "mr-20 flex" >
         <p className = " mb-5">{obj.title}"</p>
         <b>{obj.price}</b>
         </div> 
         <img className = "removeBtn" onClick = {() => onRemove(obj.id)}
            src = "/img/btn-remove.svg"
            alt = "remove"/>
         </div>
       )
      )}
    </div>
    <div className = "cartTotalBlock">
    <ul >
    <li key = "1">
      <span>Итого:</span>
      <div></div>
      <b>{totalPrice} руб.</b>
    </li>
    <li key = "2" >
    <span>Налог 5%:</span>
      <div></div>
      <b>{Math.round(totalPrice * 0.05)} руб.</b>
    </li>
  </ul>
  <button disabled = {isLoading} onClick = {onClickOrder} className = "greenButon">
     Оформить заказ <img 
       src = "/img/forCartButton.png" 
       alt = "Arrow"/>
   </button>
     </div>
    
  </div>  
   ):(<Info onClickOpen = {onClickOpen} 
    title = {isOrderComplete ?   `Ваш заказ  #${orderId} принят` :"Ваша корзина пуста"}
    image= {isOrderComplete ? "./img/completeOrder.jpg"  : "./img/cart1.jpg"} 
    description = {isOrderComplete ? "Ваш заказ в процессе обработки"  : "Чтобы оформить заказ добавьте товар" }/>
  //   <div className = "emptyDrawer d-flex">
  //   <div className ="d-flex flex-column justify-between align-center">
  //     <img src = "/img/shopCart.png" alt ="emty" id = "shopCart"/>
  //     <h2>Ваша корзина пуста</h2>
  //     <p>Чтобы оформить заказ добавьте товар</p>
  //     <button className = "greenButon" onClick = {onClickOpen}>Вернуться назад</button>
  //   </div>
  // </div>  
   )}
  


   </div>
</div>
    )
}

export default Drawer