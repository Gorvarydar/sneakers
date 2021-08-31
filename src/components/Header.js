import React from "react"

function Header(props) {

    return (
      <header className='d-flex justify-between  align-center p-40 clear'>
      <div className = "d-flex align-center ">
       <img widht = {100} height ={100}src='/img/logo6.jpg' />
        <div className = "headerInfo">
          <h3 className ="text-uppercase"> React Sneackers</h3>
          <p>{props.text} </p>  
      </div>     
        </div>
        <ul className = "d-flex">
          <li className = "mr-30 cu-p"onClick = {props.addDrawer}>
          <img width= {18} height = {18} src = '/img/Shopping cart.png' id = 'card' />
          <span className = "align-center ">1205 руб.</span>
          </li>
          <li className = "mr-30 ">
          <img width= {18} height = {18} src = '/img/Union.png' alt = "Union"/>
          </li>
        </ul>
    </header>
    )
}

export default Header