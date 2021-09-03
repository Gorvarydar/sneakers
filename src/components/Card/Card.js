import styles from "./Card.module.scss"
import React from 'react'



function Card({cardImg, price, title,  onPlus, onAddFavorite}) {

  const[liked, setLiked] = React.useState(false)
   const onFavorite = () => {
    onAddFavorite({cardImg, price, title})
    setLiked(!liked)
  }
  
  const[isAdded, setIsAdded]= React.useState(false)
    const onClickPlus = () => {
     onPlus({cardImg, price, title});
      setIsAdded (!isAdded)
}

    return(
<div className = {styles.card} >
  <div className = {styles.favorite}>
    <img onClick = {onFavorite} src = {liked ?"/img/heartlike.svg" :"/img/heartUnlike.svg"  } alt= 'heartImg'/>
      </div>
    <img  width = {145} height = {112}src ={cardImg} alt = "itemImg"/>
       <h5>{title}</h5>
        <div  className = "d-flex justify-between align-center">
           <div  className = "d-flex flex-column"> 
            <span>Цена :</span>
        <b>{price} руб.</b>
    </div>
        <img className={styles.plus} 
         onClick ={onClickPlus} 
         src = {isAdded ? "/img/Group 95.svg":"/img/plusimg.png" }
         alt = "Plus"/>
     </div>
    </div>
    )
  
}


    export default Card