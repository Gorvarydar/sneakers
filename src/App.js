import Header from "./components/Header";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import React from "react";

function App() {

  const [items, setItems] = React.useState([])
  const [onDrawerAdd, setOnDrawerAdd] = React.useState([])
  const [drawerOpened, setDrawerOpened] = React.useState(false)
  
React.useEffect(() => {
  fetch('https://612bde9dab461c00178b5bb9.mockapi.io/items').then(response => {
    return response.json()
      }).then ((json) => {
      setItems(json)
       })
},[])

const onClickAddToCart =(obj) => {
 setOnDrawerAdd(prev =>([...onDrawerAdd, obj]))
}
console.log(onDrawerAdd)
  return (
   
    <div className="wrapper align-center clear">
     {drawerOpened ? <Drawer items = {onDrawerAdd} onClickOpen = {() => {setDrawerOpened ( false)}} /> : null} 
   
      <Header addDrawer = {() => {setDrawerOpened  (true)}} text={'Магазин лучших кроссовок'}/>
    <div className = "content p-40">
      <div className= "d-flex justify-between  align-center mb-40" >
        <h1 className = "cross">Все кроссовки</h1>
        <div className = 'search d-flex align-center justy' >
        <img  width= {18} height = {18} src = '/img/search.png' alt = "Search"/>
        <input placeholder = 'Поиск...'/>
        </div>
      </div>
      
      
      <div className = 'd-flex  flex-wrap'>
        {items.map(
        (item) => (
          <Card title= {item.title}
           price = {item.price} 
           cardImg = {item.cardImg}
           onPlus = {onClickAddToCart}
           onFavorite = { ()=> {console.log('make favorite')}}/>

        ))}
      </div>
    </div>
   </div>
  );
}

export default App;
