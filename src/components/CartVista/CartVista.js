import './CartVista.css'
import { useContext } from 'react'
import { CartContext } from "../Context/CartContext"
export const CartVista = (props) =>{
    const {removeItemFromCart} = useContext(CartContext)
    return(
        <ul className="listItemCart">
            <li>
                <div className="divItem" id={props.productId}>
                    <h3 className="titleItem">{props.title}</h3>
                    <img className="productImagen" src={props.image} alt=""/>
                    <div className="divItemTextCart">
                        <p>{props.description}</p>
                        <p>${props.price}</p>
                        <p>Cantidad:{props.quantity}</p>
                        <p>Total:${props.priceTotal}</p>
                        <p>stock:{props.stock}</p>
                        <button  onClick={removeItemFromCart}>Sacar del carrito</button>
                    </div>
                </div>
            </li>
        </ul>
    )
}