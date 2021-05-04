import './ItemDetailContainer.css'
import {ItemDetail} from '../ItemDetail/ItemDetail' 
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const ItemDetailContainer = () =>{
    console.log("products")
const item = [
    {
        productId:'cremoso',
        title:'Lorem ipsum dolor sit amet',
        image:'./images/cremoso.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
        price:'$000',
    },
    {
        productId:'otro',
        title:'Lorem ipsum dolor sit amet',
        image:'./images/cremoso.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
        price:'$000',
    },
    {
        productId:'otro2',
        title:'Lorem ipsum dolor sit amet',
        image:'./images/cremoso.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
        price:'$000',
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
        const products = item.filter((items) => items.productId === productId)
        setProductos(products)
    }, [productId] )

return(
    <div>
        {productos  ? ( 
                <ItemDetail
                title={productos.title}
                // image={productos.image}
                description={productos.description}
                price={productos.price}
                />) :(<p>trayendo productos</p>)} 
    </div>
    
)

}