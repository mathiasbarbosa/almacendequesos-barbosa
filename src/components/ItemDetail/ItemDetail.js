import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
export const ItemDetail = (props) => {
    return(
        <div className="divItemDetail">
            <div className= "divItemDetailTitle">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <ItemCount stock='5' initial='1'/>
            </div>
            <div className="divItemDetailImage">
                <img className="productImage" src={props.image} alt=""/> 
            </div>
            {/* <ItemCount stock='5' initial='1'/> */}
        </div>
    )
}