import cremoso from '../../images/cremoso.jpg';
export const ItemDetail = (props) => {

    return(
        <div className="divItemDetail">
            <h3>{props.title}</h3>
            <img className="productImage" src={cremoso} alt=""/>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}