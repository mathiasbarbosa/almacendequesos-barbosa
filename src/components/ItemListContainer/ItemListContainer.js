import './ItemListContainer.css'
import {ITemList} from '../ItemList/ItemList' 
import {ItemDetailContainer, ITemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer' 

export const ItemListContainer = () => {

    return(
        <div className="divProdcuts">
            <h2 className="titleItemListContainer">Nuestros porductos</h2>
            <ITemList/>
            {/* <ItemDetailContainer/> */}
        </div>
    )
}