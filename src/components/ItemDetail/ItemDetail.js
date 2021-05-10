import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
export const ItemDetail = (props) => {
    const [count, setCount] = useState (1)
        const onAdd = () => setCount (count + 1 )
        const onSubtract = () => setCount(count - 1 )
        const stock = count
        if (stock >= 6 ) {
            console.log(stock);
            setCount(count - 1)
        }else if (stock < 1) {
            setCount(count + 1)
        }

    return(
        <div className="divItemDetail">
            <div className= "divItemDetailTitle">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <ItemCount 
                value={count}
                Add = {onAdd}
                substrac={onSubtract}
                />
                
            
                    { stock  >= 5  && 
                        <NavLink to= "/cart"><button>terminar compra</button> </NavLink>
                    
                
                    }
            </div>
            <div className="divItemDetailImage">
                <img className="productImage" src={props.image} alt=""/> 
            </div>
            {/* <ItemCount stock='5' initial='1'/> */}
        </div>
    )
}