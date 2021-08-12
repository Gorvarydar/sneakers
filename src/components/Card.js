
function Card(props) {
    return(
<div className = 'card' >
<img  width = {133} height = {112}src ={props.cardImg} alt = "2"/>
<h5>{props.title}</h5>
  <div  className = "d-flex justify-between align-center">
    <div  className = "d-flex flex-column"> 
       <span>Цена :</span>
    <b>{props.price} руб.</b>
    </div>
        <button className = "button">
        <img width = {11} height = {11} src = "/img/plus.png" alt = "Plus"/>
      </button>
     </div>
    </div>
    )
}


    export default Card