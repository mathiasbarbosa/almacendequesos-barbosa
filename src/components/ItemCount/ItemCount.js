
import './ItemCount.css'

export const ItemCount = ({value,Add,substrac}) => {



    return(
        
        <div>
            <input type="" value={value} />
            <button onClick={Add}>+</button> <button onClick={substrac}>-</button>
            <button onClick={Add}>Agregar al Carrito</button>
        </div>

    )
}