import icono from '../../images/iconoCarrito.svg';
import './CartWidget.css'
import {NavLink} from 'react-router-dom'
export const CartWidget = ({value = 0}) => {
    return(
        <NavLink to='/cart' activeClassName='activeLinkItem'  className="carrito">
            <img className="iconoCarrito" src={icono} alt=""/> 
                <p>{value}</p>
        </NavLink>

    )
}