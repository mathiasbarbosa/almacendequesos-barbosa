import './ItemListContainer.css'
import {ITemList} from '../ItemList/ItemList' 

export const ItemListContainer = () => {

    // const [prodcutos, setProductos] = useState ('')
    // const mostrarProductos = () =>{

    //     const products = ( ) => {
    //     }
    // let solicitudMostrarProductos = new Promise ((resolve, reject) =>{

    //     setTimeout(() => {
    //         resolve (item)
    //     }, 3000);
    // })
    // .then(() => {
    //     setProductos()
    // })

    // }


    return(
        <div className="divProdcuts">
            <h2 className="titleItemListContainer">Nuestros porductos</h2>
            <ITemList/>
        </div>
    )
}