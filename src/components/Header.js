import React from "react"

function Header(props) {

    return (
      <header className='d-flex justify-between  align-center p-40 clear'>
      <div className = "d-flex align-center ">
       <img widht = {100} height ={100}src='/img/logo6.jpg'alt = 'logoImg'/>
        <div className = "headerInfo">
          <h3 className ="text-uppercase"> Turbo Sneackers </h3>
          <p>{props.text} </p>  
      </div>     
        </div>
        <div className = "d-flex align-center justify-between">
          <ul className = "d-flex  align-start">
          <li className = " mr-30 d-flex" >
          <img className = "d-flex align-center justify-between cu-p" width= {18} height = {18} src = '/img/drawerCard.png' id = 'card'  alt ='cartImg' onClick = {props.addDrawer}/>
          <span className = "align-center ">1205 руб.</span>
          </li>
          <li className = "button mr-30 ">
          <img width= {18} height = {18} src = '/img/favorite.png' alt = "Favorite"/>
          </li>
          <li className = " button mr-30 ">
          <img width= {18} height = {18} src = '/img/Union.png' alt = "User"/>
          </li>
        </ul> 
        </div>
       
    </header>
    )
}

export default Header