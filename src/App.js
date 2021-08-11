
function App() {
  return (
    <div className="wrapper align-center clear">
      <div className = "overlay">
        <div className = "drawer">
        <h2>Корзина</h2>
        
        <div className ="cartItem d-flex align-center">
          <img 
            className = "mr-15" 
            width ={70}
            height = {70} 
            src = "/img/sneakers/1.jpg" 
            alt = "1"
            />
          <div className = "mr-20">
          <p className = "cartItemText mb-5">"Мужские Кроссовки Nike Blazer Mid Suede"</p>
          <b>12900</b>
          </div>

          <img className = "removeBtn"
             src = "/img/btn-remove.svg"
             alt = "remove"/>
          </div>
        </div>
      </div>

      <header className='d-flex justify-between  align-center p-40 clear'>
        <div className = "d-flex align-center ">
         <img widht = {40} height ={40}src='/img/image 4.png' />
          <div className = "headerInfo">
            <h3 className ="text-uppercase"> React Sneackers</h3>
            <p>Магазин лучших кроссовок </p>  
        </div>     
          </div>
          <ul className = "d-flex">
            <li className = "mr-30">
            <img width= {18} height = {18} src = '/img/Shopping cart.png'/>
            <span className = "align-center ">1205 руб.</span>
            </li>
            <li className = "mr-30">
            <img width= {18} height = {18} src = '/img/Union.png' alt = "Union"/>
            </li>
          </ul>
      </header>
    <div className = "content p-40">
      <div className= "d-flex justify-between  align-center mb-40" >
        <h1 className = "cross">Все кроссовки</h1>
        <div className = 'search d-flex align-center justy' >
        <img  width= {18} height = {18} src = '/img/search.png' alt = "Search"/>
        <input placeholder = 'Поиск...'/>
        </div>
      </div>
      
      
      <div className = 'd-flex justify-between  align-center'>
      
      <div className = 'card' >
        <div className ="favorite">
        <img src ="/img/heartUnlike.svg" alt ="Unlike"/>
        </div>
        <img  width = {133} height = {112}src ="/img/sneakers/1.jpg" alt = "1"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div  className = "d-flex justify-between align-center">
            <div  className = "d-flex flex-column"> 
               <span>Цена :</span>
            <b>12 999 руб.</b>
            </div>
                <button className = "button">
                <img width = {11} height = {11} src = "/img/plus.png" alt = "Plus"/>
              </button>
             </div>
            </div>

            <div className = 'card' >
        <img  width = {133} height = {112}src ="/img/sneakers/2.jpg" alt = "2"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div  className = "d-flex justify-between align-center">
            <div  className = "d-flex flex-column"> 
               <span>Цена :</span>
            <b>12 999 руб.</b>
            </div>
                <button className = "button">
                <img width = {11} height = {11} src = "/img/plus.png" alt = "Plus"/>
              </button>
             </div>
            </div>

            <div className = 'card' >
        <img  width = {133} height = {112}src ="/img/sneakers/3.jpg" alt = "3"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div  className = "d-flex justify-between align-center">
            <div  className = "d-flex flex-column"> 
               <span>Цена :</span>
            <b>12 999 руб.</b>
            </div>
                <button className = "button">
                <img width = {11} height = {11} src = "/img/plus.png" alt = "Plus"/>
              </button>
             </div>
            </div>

            <div className = 'card' >
        <img  width = {133} height = {112}src ="/img/sneakers/4.jpg" alt = "4"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div  className = "d-flex justify-between align-center">
            <div  className = "d-flex flex-column"> 
               <span>Цена :</span>
            <b>12 999 руб.</b>
            </div>
                <button className = "button">
                <img width = {11} height = {11} src = "/img/plus.png" alt = "Plus"/>
              </button>
             </div>
            </div>
      


      </div>
      

    </div>

    </div>
  );
}

export default App;
