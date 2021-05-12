import { useParams } from "react-router"
import {ItemDetail} from '../ItemDetail/ItemDetail'
import cremoso from '../../images/cremoso.jpg';
import fontina from '../../images/fontina.jpg';
import holanda from '../../images/holanda.jpg'; 
import {NavLink} from 'react-router-dom'

export const Category = () => {
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
            category:'semiblandos'
        },
        {
            productId:'Holanda',
            title:'Holanda',
            image:holanda,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, corrupti!',
            price:'$000',
            category:'semiblandos'
        },
    ]
    const { categoryId } = useParams()
	const productos = item.filter((items) => items.category === categoryId)
    console.log(productos);

return(
    <div className="">
        <NavLink to={`/category/blando`} id ="blando"activeClassName=''  className="">Blandos</NavLink>
            <NavLink to={`/category/semiblandos`} activeClassName=''  className="">Semi-blandos</NavLink>
            <NavLink to={`/category/duros`} activeClassName=''  className="">Duros</NavLink>
    {productos  ? ( productos.map(itemList => (
                                        <ItemDetail
                                        productId={itemList.productId}
                                        title={itemList.title}
                                        image={itemList.image}
                                        description={itemList.description}
                                        price={itemList.price}
                                        />))) :(<p>trayendo productos</p>)}  
</div>
)

}