import './ItemDetail.css'
export const ItemDetail = (props) => {

    return(
        <div className="divItemDetail">
            <div className= "divItemDetailTitle">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>${props.price}</p>
                <p>{props.quantity}</p>
            </div>
            <div className="divItemDetailImage">
                <img className="productImage" src={props.image} alt=""/> 
            </div>

        </div>
    )
}