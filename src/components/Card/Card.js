import styles from "./Card.module.scss"
import React from 'react'
import ContentLoader from "react-content-loader"
import AppContext from "../context"

function Card({id, cardImg, price, title,  onPlus, onAddFavorite, favorited = false,  loading = false}) {

  const {isItemAdded} = React.useContext(AppContext)
  const[liked, setLiked] = React.useState(favorited)
  const objI ={id, parentId: id, cardImg, price, title}

  const onClickPlus = () => { 
    onPlus(objI); 
    }

  const onFavorite = () => {
    onAddFavorite(objI)
      setLiked(!liked)
    }

    return(
      <div className = {styles.card} >
        {
          loading ? 
          <ContentLoader 
          speed={2}
          width={180}
          height={200}
          viewBox="0 0 180 210"
          backgroundColor="#e8e8e8"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="3" ry="3" width="150" height="120" /> 
          <rect x="0" y="160" rx="3" ry="3" width="87" height="15" /> 
          <rect x="119" y="176" rx="8" ry="8" width="32" height="32" /> 
          <rect x="0" y="140" rx="3" ry="3" width="150" height="15" /> 
          <rect x="0" y="190" rx="3" ry="3" width="5ki7" height="15" />
          <rect x="0" y="186" rx="3" ry="3" width="87" height="20" />
        </ContentLoader> : <>
         <div className = {styles.favorite}>
            {onAddFavorite && <img onClick = {onFavorite} src = {liked ?"img/heartlike.svg" :"img/heartUnlike.svg"  } alt= 'heartImg'/>}
         </div>
        <img  width = {145} height = {112}src ={cardImg} alt = "itemImg"/>
         <h5>{title}</h5>
        <div  className = "d-flex justify-between align-center">
           <div  className = "d-flex flex-column"> 
            <span>Цена :</span>
        <b>{price} руб.</b>
    </div>
       
         
       {onPlus && <img className={styles.plus} 
         onClick ={onClickPlus} 
         src = {isItemAdded(id) ? "img/Group 95.svg":"img/plusimg.png" }
         alt = "Plus"
         loading = "true"/>}
        </div>
        </>
        }

     </div>
    )
}

    export default Card