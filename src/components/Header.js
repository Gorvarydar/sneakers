function Header() {
    return (
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
    )
}

export default Header