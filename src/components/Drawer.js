function Drawer({items = [], onClickOpen, onRemove}) {
 
    return(
      //   <div style = {{display: "none"}}className = "overlay">
           <div className = "overlay">
       <div className = "drawer d-flex" >
<h2 className = "mb-30 d-flex justify-between ">Корзина 
<img className =  "removeBtn cu-p " id = 'but'
     onClick ={onClickOpen}
     src = "/img/btn-remove.svg"
     alt = "remove"/></h2>

   {items.length > 0 ? (
     <div >
     <div className = "items">
      {items.map((obj) => (
           <div className ="cartItem d-flex align-center mb-20">
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
    <li >
      <span>Итого:</span>
      <div></div>
      <b>21 498 руб.</b>
    </li>
    <li >
    <span>Налог 5%:</span>
      <div></div>
      <b>1074 руб.</b>
    </li>
  </ul>
  <button className = "greenButon">
     Оформить заказ <img 
       src = "/img/forCartButton.png" 
       alt = "Arrow"/>
   </button>
     </div>
    
  </div>  
   ):(
    <div className = "emptyDrawer d-flex">
    <div className ="d-flex flex-column justify-between align-center">
      <img src = "/img/shopCart.png" alt ="emty" id = "shopCart"/>
      <h2>Ваша корзина пуста</h2>
      <p>Чтобы оформить заказ добавьте товар</p>
      <button className = "greenButon" onClick = {onClickOpen}>Вернуться назад</button>
    </div>
  </div>  
   )}
  


   </div>
</div>
    )
}

export default Drawer