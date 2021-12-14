
import Card from "../components/Card/Card"
import { Route } from "react-router"
import AppContext from "../components/context"
import React from 'react'


function Favorites() {
  const {onFavorite, onAddToFavorite} = React.useContext(AppContext)
  console.log(onFavorite)
    return (

        <div className = "content p-40"> 

        <Route path="/favorites">
          <h1>Мои закладки</h1>
          
          </Route>
          <div className = 'itemsPage d-flex  flex-wrap'>
          {onFavorite.map((item, index) => (

            <Card title= {item.title}
             key = {index}
             onAddFavorite = {(obj)=> onAddToFavorite(obj)}
             favorited = {true}
             {...item}

             />
          ))}

        </div>

       

      </div>

    )

}




export default Favorites 