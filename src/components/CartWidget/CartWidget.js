import icono from '../../images/iconoCarrito.svg';
import './CartWidget.css'
import {NavLink} from 'react-router-dom'
export const CartWidget = () => {
    return(
        <NavLink to='/cart' activeClassName='activeLinkItem'  className="carrito">
            <img className="iconoCarrito" src={icono} alt=""/>
        </NavLink>

    )
}