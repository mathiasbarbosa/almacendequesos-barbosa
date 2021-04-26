import { useState } from 'react'
import './ItemCount.css'

export const ItemCount = () => {
    const [count, setCount] = useState (1)

    const onAdd = () => setCount (count + 1 )
    const subtract = () => setCount(count - 1 )
    const stock = count
    if (stock >= 6 ) {
        alert('no hay mas stock disponible')
        setCount(count - 1)
    }else if (stock < 1) {
        setCount(count + 1)
    }


    return(
        
        <div>
            <input type="" value={count} />
            <button onClick={onAdd}>+</button> <button onClick={subtract}>-</button>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>

    )
}