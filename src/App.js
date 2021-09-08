import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import React from "react";
import axios from "axios";
import {Route} from "react-router-dom"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./components/context"
import Orders from "./pages/Orders";

function App() {

  const [items, setItems] = React.useState([])
  const [onDrawerAdd, setOnDrawerAdd] = React.useState([])
  const [drawerOpened, setDrawerOpened] = React.useState(false)
  const [inputChanged, setInputChanged] = React.useState('')
  const [onFavorite, setOnFavorite] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const onInputChanged=(event)=> [
    
    setInputChanged(event.target.value)
  ]
React.useEffect(() => {

  async function fetchData() 
   {
     try{
      const [cartResponse, favoriteResponse, itemsResponse] = await Promise.all([
        axios.get('https://612bde9dab461c00178b5bb9.mockapi.io/drawer'), 
        axios.get('https://612bde9dab461c00178b5bb9.mockapi.io/favorites'), 
        axios.get('https://612bde9dab461c00178b5bb9.mockapi.io/items') ])

      // const cartResponse = await axios.get('https://612bde9dab461c00178b5bb9.mockapi.io/drawer')
      // const favoriteResponse = await axios.get('https://612bde9dab461c00178b5bb9.mockapi.io/favorites')
      // const itemsResponse = await  axios.get('https://612bde9dab461c00178b5bb9.mockapi.io/items')
      setIsLoading(true)
      setIsLoading(false)
  
      setOnFavorite( favoriteResponse.data)
      setOnDrawerAdd(cartResponse.data)
      setItems(itemsResponse.data)
     } catch (error) {
       alert('Ошибка при запросе данных ')
       
     }
  }
  fetchData()
},[])

const onClickAddToCart = async(obj) => {
  try{
    const findItem = onDrawerAdd.find((item) => Number(item.parentId) === Number(obj.id))
    if(findItem) {
      setOnDrawerAdd((prev) => prev.filter((it) =>Number(it.parentId) !== Number(obj.id)))
      await axios.delete(`https://612bde9dab461c00178b5bb9.mockapi.io/drawer/${findItem.id}`)
  } else {
     setOnDrawerAdd(prev =>([...prev, obj]))
     const {data} = await axios.post('https://612bde9dab461c00178b5bb9.mockapi.io/drawer', obj)
     setOnDrawerAdd((prev) => prev.map(item => {
       if(item.parentId === data.parentId) {
         return {
          ...item,
          id: data.id
         }
       }
       return item
     }))
  }
  } catch(error) {
    alert("Ошибка при добавлении в корзину ;(")
    console.error(error)
  }
}

const onAddToFavorite = async(obj) =>{
 try {
   if(onFavorite.find(favObj => Number(favObj.id) === Number(obj.id))) {
   setOnFavorite((prev) => prev.filter((item) =>Number(item.id) !== Number(obj.id)))
   await axios.delete(`https://612bde9dab461c00178b5bb9.mockapi.io/favorites/${obj.id}`);
    
  }else {
    const {data} = await axios.post('https://612bde9dab461c00178b5bb9.mockapi.io/favorites',obj); 
    setOnFavorite(prev =>([...prev, data]))
  }
 } catch(error) {
   alert("Не удалось добавить в избранное")
   console.error(error)
 }
}

const removeDrawerItem = async(id) => {
  try{
    axios.delete(`https://612bde9dab461c00178b5bb9.mockapi.io/drawer/${id}`)
  setOnDrawerAdd((prev) =>(prev.filter((item) => Number(item.id) !== Number(id))))
  console.log(id)
  } catch(error) {
    alert("Ошибка при удалении товара ;(")
    console.error(error)
  }
}

  const isItemAdded = (id) => {
    
    return onDrawerAdd.some((obj) => Number(obj.parentId)=== Number(id))
  }
  return (
    <AppContext.Provider value = {{items, onFavorite, onClickAddToCart,  onDrawerAdd, isItemAdded, onAddToFavorite, isLoading, setDrawerOpened, setOnDrawerAdd}}>
       <div className=" wrapper align-center clear" id = "itemsPage">
       
       <Drawer items = {onDrawerAdd}  onRemove = {removeDrawerItem} onClickOpen = {() => {setDrawerOpened ( false)}} opened = {drawerOpened} /> 
   
      <Header addDrawer = {() => {setDrawerOpened  (true)}} text={'Магазин лучших кроссовок'} />

      <Route path= "sneakers" exact>
        <Home 
        items = {items}
        inputChanged = {inputChanged}
        onInputChanged = {onInputChanged}
        setInputChanged = {setInputChanged}
        onClickAddToCart = {onClickAddToCart}
        onAddToFavorite = {onAddToFavorite}
        onDrawerAdd = {onDrawerAdd}
        isLoading = {isLoading}
        />
      </Route>

      <Route path ="favorites" exact>
        <Favorites />
      </Route>

      <Route path ="orders" exact>
        <Orders/>
      </Route>
 
   
   </div>
    </AppContext.Provider>
   
   
  );
}

export default App;
