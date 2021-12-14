import React from 'react'
import AppContext from './context'
 

const Info = ({title, description, image, setOnDrawerAdd}) => {
     const {setDrawerOpened} = React.useContext(AppContext)

     return (
        <div>
            <div className = "emptyDrawer d-flex flex-column flex">
                <div className ="d-flex flex-column justify-between align-center">
                <img className = "mb-50 " width = "150px"  src = {image} alt ="emty" id = "shopCart"/>
                <h2>{title}</h2>
                <p className = "opacity-6">{description}</p>
                <button className = "greenButon " onClick = {() => setDrawerOpened(false)}>Вернуться назад</button>
                </div>
            </div> 
        </div>
    )
}

export default Info 