
import Card from "../components/Card/Card"
import axios from "axios"
import React from 'react'





function Orders() {
  // const {onClickAddToCart, onAddToFavorite} = React.useContext(AppContext)
  const [orders, setOrders]  = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
  (async () => {
    try{
       const { data } = await axios.get('https://612bde9dab461c00178b5bb9.mockapi.io/orders')
    // (data.map((obj) => obj.items).flat())
    setOrders(data.map(( obj) => obj.items, []).flat())
    setIsLoading(false)
    } catch (error){
      alert('Не удалось офорить заказ')
      console.error('ERROR ORDERS')
    }
  }
  )();
 },[])

  return (
        <div className = "content p-40"> 
        <h1>Мои заказы</h1>
          <div className = 'itemsPage d-flex  flex-wrap'>
          {(isLoading  ? [...Array(12)] : orders).map((item, index) => (

            <Card  key = {index}
            // onPlus = {(obj)=>onClickAddToCart (obj)}
            // onAddFavorite = {(obj)=> onAddToFavorite(obj)}
            items = {orders}
            loading = {isLoading}
            {...item}/>
            
          ))}
        </div>
      </div>
    )
}




export default Orders 