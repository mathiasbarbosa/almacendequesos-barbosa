import './ItemDetailContainer.css'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {useEffect, useState, useContext, Fragment } from 'react'
import { useParams } from 'react-router'
import {CartContext} from '../Context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import {getFireStore} from '../Firebase'

export const ItemDetailContainer = () =>{

const {addItemToCart} = useContext(CartContext)
const { productId } = useParams()
const [item, setItem] = useState({})
const [quantity, setQuantity] = useState(0)
useEffect (
    () => {
        const getData = () => {
            const db = getFireStore()
            const itemCollection = db.collection('items')
            if (productId) {
                const itemId = itemCollection.where('productId', '==', productId)
                console.log(itemId);
                itemId.get().then(querySnapshot => {
                    const itemFiltrado = querySnapshot.docs.map((doc) => { 
                        const {title,description,price,image,stock} = doc.data()
                        return {
                            id: doc.id,
                            title,
                            description,
                            price,
                            image,
                            stock,
                        }
                
                })
                    setItem(itemFiltrado)
                })
            }
        }
        getData()
    }, [productId]
)

const [cart, setCart] = useState([])
const addToCart = (item, quantity) => {
    setCart(item,quantity)
    const newCart = [...cart]
    const findItem = isInCart(item)
    if (findItem) {
        newCart[newCart.findIndex(prod => prod.id === item.id )].quantity+=1
        setCart(newCart)
        
        return
    }
    { item.quantity = quantity
    newCart.push(item)
    setCart(newCart)
    }
    
}
const isInCart = item =>  cart.find(produc =>  produc.id === item.id)

    useEffect(
        () => {
            setQuantity(quantity+1)
        }, [cart]
    )
    
const substrac = () => {
    setQuantity(quantity - 1)
    if (quantity < 1  ) {
        setQuantity(quantity+1)
    }
}


return(
    <div>
        {
            item.length > 0 ? ( item.map(({title,description,price,image}) =>(
                <Fragment>
                <ItemDetail 
                title={title}
                description = {description}
                price = {price}
                image= {image}
                />
                <ItemCount
                value={  quantity  }
                addItem  =  { ( )  =>  addToCart ( item , quantity  ) }
                addItemCart = { () => addItemToCart ( item , quantity  ) }
                substrac= { () => substrac (quantity) }
                />
                </Fragment>
            
            ))

            )
            :(
                <h3>Cargando productos</h3>
            )
        }
    </div>
)


    }