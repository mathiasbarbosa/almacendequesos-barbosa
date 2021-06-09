import './Item.css'
import {Link} from 'react-router-dom'

export const Item = (props) => {


    return(
        <ul className="listItems">
            <li>
        <div className="divItem" id={props.productId}>
            <h3 className="titleItem">{props.title}</h3>
            <img className="productImagen" src={props.image} alt=""/>
            <div className="divItemText">
                <p>{props.description}</p>
                <p>${props.price}</p>
                <Link to ={`/itemdetailcontainer/${props.productId}`}> <span>ver mas</span></Link>
            </div>
        </div>
            </li>
        </ul>
    )
}