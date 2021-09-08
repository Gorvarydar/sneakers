import Card from "../components/Card/Card"

import React from "react"


function Home({ 
  items,
  inputChanged,
  onInputChanged,
  setInputChanged,
  onClickAddToCart,
  onAddToFavorite,
  onDrawerAdd,
  isLoading
   }) {
    
     const renderItems = () => {
       const filterItems =  items.filter((item) => 
       item.title.toLowerCase().includes(inputChanged.toLowerCase()))
       
         return (isLoading  ? [...Array(12)] :filterItems ).map(
          (item, index) => (
      
        <Card 
         key = {index}
         onPlus = {(obj)=>onClickAddToCart (obj)}
         onAddFavorite = {(obj)=> onAddToFavorite(obj)}
        //  toCartAdded = {isItemAdded(item && item.id)}
         loading = {isLoading}
         {...item}/>
         
      ))
     }

    return (
        <div className = "content p-40"> 
        <div className= "d-flex justify-between  align-center mb-40" >
          <h1 className = "cross">{inputChanged ? `Поиск по запросу: "${inputChanged}"` : "Все кроссовки"}</h1>
          <div className = 'search d-flex align-center justy' >
          <img  width= {18} height = {18} src = 'img/search.png' alt = "Search"/>
          <input onChange = {onInputChanged} value = {inputChanged} placeholder = 'Поиск...' maxLength = "20"/>
          {inputChanged && <img onClick = {() => {setInputChanged("")}} className =  "clear-s cu-p " id = 'but'  src = "img/btn-remove.svg"alt = "removeSearch"/>}
          </div>
        </div>
        
        <div className = 'itemsPage d-flex  flex-wrap'>

          {renderItems()}
        </div>
      </div>
    )
}

export default Home