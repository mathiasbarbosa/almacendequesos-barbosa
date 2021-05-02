import './ItemDetailContainer.css'
import {ItemDetail} from '../ItemDetail/ItemDetail' 
import { useEffect, useState } from 'react'
export const ItemDetailContainer = () =>{

    const itemDetail = [
        {
            title:'Lorem ipsum dolor sit amet',
            image:'./images/cremoso.jpg',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
            price:'$000',
        },
]
const [productos, setProductos] = useState([])
const getProductosDetalle = () =>{

    let mostrarProductosDetalle = new Promise ((resolve, reject) => {
        console.log("1")
        setTimeout(() => {
            console.log("2")
            resolve (   itemDetail.map(itemList => (
                                    <ItemDetail
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
            <button onClick={getProductosDetalle}>detalle</button>
            <div className="divItemDetailContainer">{productos}</div>
        </div>
        

    )
}