import { Fragment, useContext, } from "react"
import { CartContext } from "../Context/CartContext"
import {NavLink} from 'react-router-dom'
import {CartVista} from '../CartVista/CartVista'
import {getFireStore} from '../Firebase'
import './Cart.css'
export const Cart = () => {
    const {cart} = useContext(CartContext)
    const {finalizar} = useContext(CartContext)
    const item = cart.map((doc) => {
                const[{title,description,image,price,id,stock}] = doc
                return {
                    id: id,
                    title:title,
                    description: description,
                    image:image,
                    price:price,
                    quantity:doc.quantity,
                    priceTotal: price * doc.quantity,
                    stock:stock
                }
            })

    const handleFinish = async () => {
        const db = getFireStore()
        const batch = db.batch()
        item.forEach((items) => {
            const itemSelected = db.collection('items').doc(items.id)
            batch.update(itemSelected, {stock:items.stock - items.quantity})
        });
        batch.commit().then((r) => console.log(r))
        finalizar()
        alert('compra finalizada')
    }


    return(

<div className = "divItemCart">
            {item.length > 0 ? ( item.map(itemList => (
                <Fragment>

                <CartVista
                    title={itemList.title}
                    description = {itemList.description}
                    price = {itemList.price} 
                    image= {itemList.image}
                    quantity={itemList.quantity}
                    priceTotal={itemList.priceTotal}
                    stock={itemList.stock}
                />
                </Fragment>
            )) ) 
            : (<div className="divButtonProduct">
                    <NavLink to='/' activeClassName='activeLinkItem'  className="linkProductos">Productos</NavLink>
                </div>)
                    }
                <button className='botonFinalizar' onClick={handleFinish}>Finalizar compra</button>
</div>
    )
}

