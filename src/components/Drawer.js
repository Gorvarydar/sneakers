function Drawer() {
    return(
        <div style = {{display: "none"}}className = "overlay">
       <div className = "drawer d-flex" >
<h2 className = "mb-30 d-flex justify-between ">Корзина 
<img className = "removeBtn cu-p"
     src = "/img/btn-remove.svg"
     alt = "remove"/></h2>

<div className = "items">
<div className ="cartItem d-flex align-center mb-20">
    <div
     style = {{backgroundImage: "url(/img/sneakers/1.jpg)"}}
     className = "cartImage"></div>
  <div className = "mr-20 flex">
  <p className = " mb-5">"Мужские Кроссовки Nike Blazer Mid Suede"</p>
  <b>12900</b>
  </div> 
  <img className = "removeBtn"
     src = "/img/btn-remove.svg"
     alt = "remove"/>
  </div>
  <div className ="cartItem d-flex align-center mb-20">
    
    <div
     style = {{backgroundImage: "url(/img/sneakers/3.jpg)"}}
     className = "cartImage"></div>
  <div className = "mr-20 flex">
  <p className = " mb-5">"Мужские Кроссовки Nike Blazer Mid Suede"</p>
  <b>12900</b>
  </div> 
  <img className = "removeBtn"
     src = "/img/btn-remove.svg"
     alt = "remove"/>
  </div>
  <div className ="cartItem d-flex align-center mb-20">
    
    <div
     style = {{backgroundImage: "url(/img/sneakers/1.jpg)"}}
     className = "cartImage"></div>
  <div className = "mr-20 flex">
  <p className = " mb-5">"Мужские Кроссовки Nike Blazer Mid Suede"</p>
  <b>12900</b>
  </div> 
  <img className = "removeBtn"
     src = "/img/btn-remove.svg"
     alt = "remove"/>
  </div>
  <div className ="cartItem d-flex align-center mb-20">
    <div
     style = {{backgroundImage: "url(/img/sneakers/1.jpg)"}}
     className = "cartImage"></div>
  <div className = "mr-20 flex">
  <p className = " mb-5">"Мужские Кроссовки Nike Blazer Mid Suede"</p>
  <b>12900</b>
  </div> 
  <img className = "removeBtn"
     src = "/img/btn-remove.svg"
     alt = "remove"/>
  </div>
  <div className ="cartItem d-flex align-center mb-20">
    <div
     style = {{backgroundImage: "url(/img/sneakers/1.jpg)"}}
     className = "cartImage"></div>
  <div className = "mr-20 flex">
  <p className = " mb-5">"Мужские Кроссовки Nike Blazer Mid Suede"</p>
  <b>12900</b>
  </div> 
  <img className = "removeBtn"
     src = "/img/btn-remove.svg"
     alt = "remove"/>
  </div>
  <div className ="cartItem d-flex align-center mb-20">
    <div
     style = {{backgroundImage: "url(/img/sneakers/1.jpg)"}}
     className = "cartImage"></div>
  <div className = "mr-20 flex">
  <p className = " mb-5">"Мужские Кроссовки Nike Blazer Mid Suede"</p>
  <b>12900</b>
  </div> 
  <img className = "removeBtn"
     src = "/img/btn-remove.svg"
     alt = "remove"/>
  </div>
  
  </div>
<div className = "cartTotalBlock">
  <ul >
  <li >
    <span>Итого:</span>
    <div></div>
    <b>21 498 руб.</b>
  </li>
  <li >
  <span>Налог 5%:</span>
    <div></div>
    <b>1074 руб.</b>
  </li>
</ul>
<button className = "greenButon">
  Оформить заказ <img 
  src = "/img/forCartButton.png" 
  alt = "Arrow"/>
  </button>
</div>
</div>
</div>
    )
}

export default Drawer