import './ItemListCategory.css'
import {CategoryCard} from '../CategoryCard/CategoryCard' 
import { useEffect, useState } from 'react'
import {getFireStore} from '../Firebase'
export const ItemListCategory = () => {
    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        const db = getFireStore()
        const itemCollection = db.collection('category')
        console.log(itemCollection);
        itemCollection.get()
        .then((querySnapshot) => {
            setCategorys(querySnapshot.docs.map((doc) =>(
                {
                    id: doc.id,
                    ...doc.data()
                }) 
            ))
            
        })

    }, [] )
    console.log(categorys);
    return(
        <div>
        <div className = "divItemList">
            { categorys ? ( categorys.map(itemList => (
                                        <CategoryCard
                                        category={itemList.category}
                                        title={itemList.title}
                                        image={itemList.image}
                                        />))) : (<p>trayendo produc</p>)}  </div>
        </div>
    )
}