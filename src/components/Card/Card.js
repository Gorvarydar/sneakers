import styles from "./Card.module.scss"


console.log(styles)


function Card(props) {
  const onClickButton = ()=> {
    alert(props.title)
  }
    return(
<div className = {styles.card} >
  <div className = {styles.favorite}>
    <img src = "/img/heartUnlike.svg"/>
  </div>
<img  width = {133} height = {112}src ={props.cardImg} alt = "2"/>
<h5>{props.title}</h5>
  <div  className = "d-flex justify-between align-center">
    <div  className = "d-flex flex-column"> 
       <span>Цена :</span>
    <b>{props.price} руб.</b>
    </div>
        <button className = "button" onClick ={()=> {alert(props.price)}}>
        <img width = {11} height = {11} src = "/img/plus.png" alt = "Plus"/>
      </button>
     </div>
    </div>
    )
}


    export default Card