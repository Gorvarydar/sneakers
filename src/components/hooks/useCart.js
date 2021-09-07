import AppContext from "../context";
import React from 'react'


export const useCart =() => {
    const {onDrawerAdd, setOnDrawerAdd} = React.useContext(AppContext)
    const totalPrice = onDrawerAdd.reduce((sum, obj) => obj.price + sum, 0)

    return {onDrawerAdd, setOnDrawerAdd, totalPrice}
}
 


