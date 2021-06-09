import { useParams } from "react-router"
import {Item} from '../Item/Item'
import { useEffect, useState } from "react"
import {getFireStore} from '../Firebase'

export const Category = () => {
    const { category } = useParams()
    const [items, setItems] = useState([])
    useEffect (
        () => {
            const getData = () => {
                const db = getFireStore()
                const itemCollection = db.collection('items')
                if (category) {
                    const itemsCategory = itemCollection.where('category', '==', category)
                    console.log(itemsCategory);
                    itemsCategory.get().then(querySnapshot => {
                        const itemsCategoryFiltrado = querySnapshot.docs.map((doc) => { 
                            const {title,description,price,productId,image} = doc.data()
                            return {
                                id: doc.id,
                                title,
                                description,
                                price,
                                productId,
                                image,
                            }
                    
                    })
                    setItems(itemsCategoryFiltrado)
                    
                    })
                }
            }
            getData()
            console.log(items);
        }, [category]
    )

return(
    <div className="">
            { items ? ( items.map(itemList => (
                                        <Item
                                        productId={itemList.productId}
                                        title={itemList.title}
                                        image={itemList.image}
                                        description={itemList.description}
                                        price={itemList.price}
                                        image={itemList.image}
                                        />))) : (<p>trayendo produc</p>)}  
</div>
)

}