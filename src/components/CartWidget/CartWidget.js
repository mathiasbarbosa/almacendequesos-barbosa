import icono from '../../images/iconoCarrito.svg';
import './CartWidget.css'

export const CartWidget = () => {
    return(
        <a href="" className="carrito">
            <img className="iconoCarrito" src={icono} alt=""/>
        </a>
    )
}