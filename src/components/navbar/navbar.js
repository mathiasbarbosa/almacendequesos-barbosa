import logo from '../../images/logoAlmacen.png';
import './navbar.css'
import {NavLink} from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
export const Nabvar = () => {
return(
<header className="header">
    <h2 className="title">Almacen de quesos</h2>
    <img className="logo" src={logo} alt=""/>
    <nav className="navbar">
        <ul className="links">
            <CartWidget/>
            <li className="link">
                <NavLink to='/' activeClassName='activeLinkItem'  className="linkitem">Inicio</NavLink>
            </li>
            <li className="link">
            <NavLink to='/' activeClassName='activeLinkItem'  className="linkitem">Productos</NavLink>
            </li>
            <li className="link">
            <NavLink to='' activeClassName='activeLinkItem'  className="linkitem">Nosotros</NavLink>
            </li>
        </ul>
    </nav>
</header>
)
}