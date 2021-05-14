import './ItemDetailContainer.css'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import cremoso from '../../images/cremoso.jpg';
import fontina from '../../images/fontina.jpg';
import holanda from '../../images/holanda.jpg'; 
import {useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import {CartContext} from '../Context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetailContainer = () =>{
const item = [
        {
            productId:'cremoso',
            title:'Cremoso',
            image: cremoso ,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
            price:'$000',
            category:'blando'
        },
        {
            productId:'fontina',
            title:'Fontina',
            image:fontina ,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
            price:'$000',
            category:'blando'
        },
        {
            productId:'Holanda',
            title:'Holanda',
            image:holanda,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
            price:'$000',
            category:'blando'
        },
    ]
const {quantity} = useContext(CartContext)
const{addToCart} = useContext(CartContext)
const {removeItemFromCart} = useContext(CartContext)
const [productos, setProductos] = useState(false)
const { productId } = useParams()
// const [count, setCount] = useState (0)
//         const onAdd = () => setCount (count + 1 )
//         const onSubtract = () => setCount(count - 1 )
//         const stock = [count] 
        // if (stock >= 6 ) {
        //     console.log(stock);
        //     setCount(count - 1)
        // }else if (stock < 0) {
        //     setCount(count + 1)
        // }
        // console.log(count)
// console.log(productId);
const getProductos = (data) =>{
    return (data)
}

useEffect (() => {
        getProductos (item)
        const products = item.find((items) => items.productId === productId)
        setProductos(products)
    }, [productId] )

return(
    <div className="divItemDetailContainer">
        {productos  ? ( 
        <div>

                <ItemDetail
                title={productos.title}
                image={productos.image}
                description={productos.description}
                price={productos.price}
                stock={productos.stock}
                /> <ItemCount 
                value={quantity}
                addItem = {() => addToCart(productos, quantity )}
                substrac={() => removeItemFromCart(productos.productId)}
                // Add = {() => addToCart(productos, stock.length )}
                quantity ={quantity}
                /></div>) :(<p>trayendo productos</p>)
                
            } 
    </div>
    
)

}