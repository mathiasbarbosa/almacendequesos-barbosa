import logo from '../../logoalma.png';
import './navbar.css'

export const Nabvar = () => {
return(
<header className="header">
    <h2 className="title">Almacen de quesos</h2>
    <img className="logo" src={logo} alt=""/>
    <nav className="navbar">
        <ul className="links">
            <li className="link">
                <a href="" className="linkitem">Inicio</a>
            </li>
            <li className="link">
                <a href="" className="linkitem">Productos</a>
            </li>
            <li className="link">
                <a href="" className="linkitem">Nosotros</a>
            </li>
        </ul>
    </nav>
</header>
)
}