import './ItemDetailContainer.css'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import cremoso from '../../images/cremoso.jpg';
import fontina from '../../images/fontina.jpg';
import holanda from '../../images/holanda.jpg'; 
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const ItemDetailContainer = () =>{
const item = [
    {
        productId:'cremoso',
        title:'Cremoso',
        image: cremoso ,
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
        price:'$000',
        stock:5,
    },
    {
        productId:'fontina',
        title:'Fontina',
        image:fontina ,
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
        price:'$000',
        stock:5,
    },
    {
        productId:'Holanda',
        title:'Holanda',
        image:holanda,
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
        price:'$000',
        stock:5,
    },
]

const [productos, setProductos] = useState(false)
const { productId } = useParams()
console.log(productId);
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
                <ItemDetail
                title={productos.title}
                image={productos.image}
                description={productos.description}
                price={productos.price}
                stock={productos.stock}
                />) :(<p>trayendo productos</p>)} 
    </div>
    
)

}