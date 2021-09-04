import Card from "../components/Card/Card"
import { Route } from "react-router"

function Favorites({ items,
  inputChanged,
  onInputChanged,
  setInputChanged,
  onClickAddToCart,
  onAddToFavorite}) {
    return (
        <div className = "content p-40"> 
        <div className= "d-flex justify-between  align-center mb-40" >
          <h1 className = "cross">{inputChanged ? `Поиск по запросу: "${inputChanged}"` : "Мои закладки "}</h1>
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
          .map(
          (item, index) => (
            <Card title= {item.title}
             key = {index}
             price = {item.price} 
             cardImg = {item.cardImg}
             id = {item.id}
             onPlus = {(obj)=>onClickAddToCart (obj)}
             onAddFavorite = {(obj)=> onAddToFavorite(obj)}
             favorited = {true}
            
             />
          ))}
        </div>
        
        
        <h3>Here will be my favorites </h3>
      </div>
    )
}

export default Favorites