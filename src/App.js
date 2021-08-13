import Header from "./components/Header";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";

const arrCards = [
   {title:"Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999, 
    cardImg:"/img/sneakers/1.jpg"},
   {title:"Мужские Кроссовки Nike Air Max 270",
    price: 15600, 
    cardImg:"/img/sneakers/2.jpg"},
   {title:"Мужские Кроссовки Under Armour Curry 8",
    price: 8490, 
    cardImg:"/img/sneakers/3.jpg"},
   {title:"Кроссовки Puma X Aka Boku Future Rider",
    price:9690, 
    cardImg:"/img/sneakers/4.jpg"},
 
]

function App() {
  return (
    <div className="wrapper align-center clear">
      
     <Drawer/>
      <Header text={'Магазин лучших кроссовок'}/>
    <div className = "content p-40">
      <div className= "d-flex justify-between  align-center mb-40" >
        <h1 className = "cross">Все кроссовки</h1>
        <div className = 'search d-flex align-center justy' >
        <img  width= {18} height = {18} src = '/img/search.png' alt = "Search"/>
        <input placeholder = 'Поиск...'/>
        </div>
      </div>
      
      
      <div className = 'd-flex justify-between align-center'>
        {arrCards.map(
        (obj) => (
          <Card title= {obj.title} price = {obj.price} cardImg = {obj.cardImg}/>

        ))}
      </div>
    </div>
   </div>
  );
}

export default App;
