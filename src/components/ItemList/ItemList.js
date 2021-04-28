import './ItemList.css'
import {Item} from '../Item/Item' 
import { useEffect, useState } from 'react'
export const ITemList = () => {

    const item = [
        {
            title:'Lorem ipsum dolor sit amet',
            image:'./images/cremoso.jpg',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
            price:'$000',
        },
        {
            title:'Lorem ipsum dolor sit amet',
            image:'./images/cremoso.jpg',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
            price:'$000',
        },
        {
            title:'Lorem ipsum dolor sit amet',
            image:'./images/cremoso.jpg',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
            price:'$000',
        },
    ]

    const [productos, setProductos] = useState([])
    const getProductos = () =>{

        let mostrarProductos = new Promise ((resolve, reject) => {
            console.log("1")
            setTimeout(() => {
                console.log("2")
                resolve (   item.map(itemList => (
                                        <Item
                                        title={itemList.title}
                                        image={itemList.image}
                                        description={itemList.description}
                                        price={itemList.price}
                                        />)))
            }, 2000);
        })
        .then((productos) => {
            setProductos(productos)

        })
    }

    return(
        <div>
        <div className="buttonMostrarProductos" >
        <button onClick={getProductos} >Mostrar productos</button>
        </div>
        <div className = "divItemList">{productos}</div>
        </div>
    )
}