import './ItemList.css'
import {Item} from '../Item/Item' 
import { useEffect, useState } from 'react'
export const ITemList = () => {

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
    const getProductos = (data) =>{
        return new Promise ((resolve, reject) => {
            console.log("1")
            setTimeout(() => {
                console.log("2")
                return resolve (data)
            }, 2000);
        })
    }

    useEffect (() => {
        getProductos (item).then(result => {
            setProductos(result)
        })
    }, [] )

    return(
        <div>
        <div className = "divItemList">
            {productos  ? ( productos.map(itemList => (
                                        <Item
                                        productId={itemList.productId}
                                        title={itemList.title}
                                        image={itemList.image}
                                        description={itemList.description}
                                        price={itemList.price}
                                        />))) :(<p>trayendo productos</p>)} </div>
        </div>
    )
}