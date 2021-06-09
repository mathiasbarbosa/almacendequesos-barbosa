import './ItemCount.css'

export const ItemCount = ({value,substrac,addItem,quantity,addItemCart}) => {

    return(
        
        <div className="divItemCount">
            <input type="" value={value} />
            <button onClick={addItem}>+</button> <button onClick={substrac}>-</button>
            <button type="submit" value = {value} onClick={addItemCart}>Agregar al Carrito <p>{quantity}</p></button>
        </div>

    )
}