import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import {Route} from "react-router-dom"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

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

  axios.get('https://612bde9dab461c00178b5bb9.mockapi.io/favorites').then((response) => {
    setOnFavorite(response.data)
  })

  axios.get('https://612bde9dab461c00178b5bb9.mockapi.io/drawer').then((response) => {
    setOnDrawerAdd(response.data)
  })
},[])

const onClickAddToCart =(obj) => {
  axios.post('https://612bde9dab461c00178b5bb9.mockapi.io/drawer', obj)
  setOnDrawerAdd(prev =>([...onDrawerAdd, obj]))
}

const onAddToFavorite = async(obj) =>{
 try {
   if(onFavorite.find(favObj => favObj.id === obj.id)) {
    axios.delete(`https://612bde9dab461c00178b5bb9.mockapi.io/favorites/${obj.id}`);
   
  }else {
    const {data} = await axios.post('https://612bde9dab461c00178b5bb9.mockapi.io/favorites',obj);
      
    setOnFavorite(prev =>([...prev, data]))
  }
 } catch {
   alert("Не удалось добавить в избранное")
 }
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

      <Route path= "/" exact>
        <Home 
        items = {items}
        inputChanged = {inputChanged}
        onInputChanged = {onInputChanged}
        setInputChanged = {setInputChanged}
        onClickAddToCart = {onClickAddToCart}
        onAddToFavorite = {onAddToFavorite}
        />
      </Route>

      <Route path ="/favorites" exact>
        <Favorites  items = {onFavorite} onAddToFavorite = {onAddToFavorite}/>
      </Route>

      
    {/* <div className = "content p-40"> 
      <div className= "d-flex justify-between  align-center mb-40" >
        <h1 className = "cross">{inputChanged ? `Поиск по запросу: "${inputChanged}"` : "Все кроссовки"}</h1>
        <div className = 'search d-flex align-center justy' >
        <img  width= {18} height = {18} src = '/img/search.png' alt = "Search"/>
        <input onChange = {onInputChanged} value = {inputChanged} placeholder = 'Поиск...' maxLength = "20"/>
        {inputChanged && <img onClick = {() => {setInputChanged("")}} className =  "clear-s cu-p " id = 'but'  src = "/img/btn-remove.svg"alt = "removeSearch"/>}
        </div>
      </div>
      <Route path="/test"><h1>"LOGO"
        </h1><img src = "./img/newCart.png" alt= "tectpage"/>"some text for test"</Route>
      
      
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
    </div> */}
   </div>
  );
}

export default App;
