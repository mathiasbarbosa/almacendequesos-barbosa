import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import {NavLink} from 'react-router-dom'
export const Cart = () => {
    const {cart} = useContext(CartContext)
    
    console.log(cart,'cart')
    const {removeItemFromCart} = useContext(CartContext)
    return(

<div className = "divItemList">
            {cart.length >= 1  ? ( cart.map(itemList => (
                                        <div>
                                            <h2>{itemList.nombre}</h2>
                                            <h2>{itemList.quantity}</h2>
                                            <button onClick= {() => removeItemFromCart(itemList.nombre)}>X</button>
                                        </div>
                                        ))) : ( <NavLink to='/' activeClassName='activeLinkItem'  className="linkitem">Productos</NavLink>)
}
                                        </div>
    )
}