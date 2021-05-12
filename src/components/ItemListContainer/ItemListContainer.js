import './ItemListContainer.css'
import {ITemList} from '../ItemList/ItemList' 
import {NavLink} from 'react-router-dom'

export const ItemListContainer = () => {


    return(
        <div className="divProdcuts">
            <h2 className="titleItemListContainer">Nuestros porductos</h2>
            <NavLink to={`/category/blando`} id ="blando"activeClassName=''  className="">Blandos</NavLink>
            <NavLink to={`/category/semiblandos`} activeClassName=''  className="">Semi-blandos</NavLink>
            <NavLink to={`/category/duros`} activeClassName=''  className="">Duros</NavLink>
            <ITemList/>
        </div>
    )
}