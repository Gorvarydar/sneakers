import React from "react"
import { Link} from "react-router-dom"
import {useCart} from "../components/hooks/useCart"


function Header(props) {
 
  const {totalPrice} = useCart()

 
    return (
      <header className=' header d-flex justify-between  align-center p-40 clear'>
      <div className = "d-flex align-center ">
        
        <Link exact to = "" >
          <img widht = {120} height ={120} src= "img/logoZ.jpg" alt = 'logoImg'/>
        </Link>
       
        <div className = "headerInfo">
          <h3 className ="text-uppercase"> Turbo Sneackers </h3>
          <p>{props.text} </p>  
      </div>     
        </div>
        <div className = "leftCorner d-flex align-center justify-between">
          <ul className = "d-flex  align-start">
          <li className = " mr-30 d-flex" >
          <img className = "d-flex align-center justify-between cu-p" width= {18} height = {18} src = "img/drawerCard.png" id = "card"  alt ="cartImg" onClick = {props.addDrawer}/>
          <span className = "align-center ">{totalPrice} руб.</span>
          </li>
          <li className = "button mr-30 ">
            
            <Link  exact to = "/favorites" >
              <img className = "d-flex align-center justify-between"width= {18} height = {18} src = "img/favorite.png" alt = "Favorite"/>
            </Link>
         
          </li>
          <li className = " button mr-30 ">
        
            <Link to ="/orders" exact >
          <img width= {18} height = {18} src = "img/Union.png" alt = "User"/>
          </Link>
          </li>
        </ul> 
        </div>
       
    </header>
    )
}

export default Header