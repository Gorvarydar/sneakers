import Header from "./components/Header";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";

function App() {

  const [items, setItems] = React.useState([])
  const [onDrawerAdd, setOnDrawerAdd] = React.useState([])
  const [drawerOpened, setDrawerOpened] = React.useState(false)
  const [inputChanged, setInputChanged] = React.useState('')
  const [onFavorite, setOnFavorite] = React.useState([])

 
  
  const onInputChanged=(event)=> [
    
    setInputChanged(event.target.value)
  ]
React.useEffect(() => {
  // fetch('https://612bde9dab461c00178b5bb9.mockapi.io/items').then(response => {
  //   return response.json()
  //     }).then ((json) => {
  //     setItems(json)
  //      })

  axios.get('https://612bde9dab461c00178b5bb9.mockapi.io/items').then((response) => {
    setItems(response.data)
  })

  axios.get('https://612bde9dab461c00178b5bb9.mockapi.io/drawer').then((response) => {
    setOnDrawerAdd(response.data)
  })
},[])

const onClickAddToCart =(obj) => {
  axios.post('https://612bde9dab461c00178b5bb9.mockapi.io/drawer', obj)
  setOnDrawerAdd(prev =>([...onDrawerAdd, obj]))
}

const onAddToFavorite = (obj) => {
  axios.post('https://612bde9dab461c00178b5bb9.mockapi.io/favorites',obj)
    setOnFavorite(prev =>([...onFavorite, obj]))
  
}

const removeDrawerItem = (id) => {
  axios.delete(`https://612bde9dab461c00178b5bb9.mockapi.io/drawer/${id}`)
  setOnDrawerAdd((prev) =>(prev.filter((item) => item.id !== id)))
  console.log(id)
  
}
  return (
   
    <div className=" wrapper align-center clear" id = "itemsPage">
     {drawerOpened ? <Drawer items = {onDrawerAdd}  onRemove = {removeDrawerItem} onClickOpen = {() => {setDrawerOpened ( false)}} /> : null} 
   
      <Header addDrawer = {() => {setDrawerOpened  (true)}} text={'Магазин лучших кроссовок'} />
    <div className = "content p-40"> 
      <div className= "d-flex justify-between  align-center mb-40" >
        <h1 className = "cross">{inputChanged ? `Поиск по запросу: "${inputChanged}"` : "Все кроссовки"}</h1>
        <div className = 'search d-flex align-center justy' >
        <img  width= {18} height = {18} src = '/img/search.png' alt = "Search"/>
        <input onChange = {onInputChanged} value = {inputChanged} placeholder = 'Поиск...' maxLength = "20"/>
        {inputChanged && <img onClick = {() => {setInputChanged("")}} className =  "clear-s cu-p " id = 'but'  src = "/img/btn-remove.svg"alt = "removeSearch"/>}
        </div>
      </div>
      
      
      <div className = 'itemsPage d-flex  flex-wrap'>
        {items
        .filter((item) => item.title.toLowerCase().includes(inputChanged.toLowerCase()))
        .map(
        (item, index) => (
          <Card title= {item.title}
           key = {index}
           price = {item.price} 
           cardImg = {item.cardImg}
           onPlus = {(obj)=>onClickAddToCart (obj)}
           onAddFavorite = {(obj)=> onAddToFavorite(obj)}/>
        ))}
      </div>
    </div>
   </div>
  );
}

export default App;
