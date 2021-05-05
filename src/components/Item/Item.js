import './Item.css'
import { ItemCount } from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

export const Item = (props) => {


    return(
        <div className="divItem" id={props.productId}>
            <h3>{props.title}</h3>
            <img className="productImagen" src={props.image} alt=""/>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <ItemCount stock='5' initial='1'/>
            <Link to ={`/itemdetailcontainer/${props.productId}`}> <span>ver mas</span></Link>
        </div>
    )
}