import './Item.css'
import {Link} from 'react-router-dom'

export const Item = (props) => {


    return(
        <div className="divItem" id={props.productId}>
            <h3>{props.title}</h3>
            <img className="productImagen" src={props.image} alt=""/>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <Link to ={`/itemdetailcontainer/${props.productId}`}> <span>ver mas</span></Link>
        </div>
    )
}