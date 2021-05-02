import './ItemListContainer.css'
import {ITemList} from '../ItemList/ItemList' 

export const ItemListContainer = () => {

    return(
        <div className="divProdcuts">
            <h2 className="titleItemListContainer">Nuestros porductos</h2>
            <ITemList/>
        </div>
    )
}