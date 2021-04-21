import './ItemListContainer.css'
import cremoso from '../../images/cremoso.jpg';
export const ItemListContainer = (props) => {

const click = () => alert (`${props.title} agregado al carrito`)

    return(
        <div className="divProdcuts" onClick={click}>
            <h3>{props.title}</h3>
            <img className="productImage" src={cremoso} alt=""/>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}