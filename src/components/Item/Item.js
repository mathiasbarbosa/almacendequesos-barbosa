import './Item.css'
import cremoso from '../../images/cremoso.jpg';
import { ItemCount } from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

export const Item = (props) => {


    return(
        <div className="divItem" id={props.productId}>
            <h3>{props.title}</h3>
            <img className="productImage" src={cremoso} alt=""/>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <ItemCount stock='5' initial='1'/>
            <button>
                <Link to ={` /itemdetailcontainer/${props.productId}`}>ver mas</Link>
            </button>
        </div>
    )
}