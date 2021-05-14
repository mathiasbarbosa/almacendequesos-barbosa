
import './ItemCount.css'

export const ItemCount = ({value,substrac,addItem,quantity}) => {



    return(
        
        <div>
            <input type="" value={value} />
            <button onClick={addItem}>+</button> <button onClick={substrac}>-</button>
            <button type="submit" value = {value} onClick={addItem}>Agregar al Carrito <p>{quantity}</p></button>
        </div>

    )
}