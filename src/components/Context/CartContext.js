import  { createContext, useEffect, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])
const [quantity, setQuantity] = useState(0)

const addItemToCart = (item,quantity) => {
        const newCart = [...cart]
        const findItem = isInCart(item)
        if (findItem) {
            newCart[newCart.findIndex(prod => prod.id === item.id )].quantity+=quantity
            setCart({newCart})
        }
        { item.quantity = quantity
        newCart.push(item)
        setCart(newCart)
        }
}

const isInCart = newCart => cart.find(product => product.id === newCart.id)


const finalizar = () => {
    setCart([])
}
    
const removeItemFromCart = (productId) =>{
        cart.splice(
            cart.findIndex((p) => p.productId !== productId, ),
            1
            );
            setCart([...cart]);
            console.log(cart);
}

useEffect( ()=>{
setQuantity(cart.length)
    }, [cart])

return(
    <CartContext.Provider value={{cart,removeItemFromCart,addItemToCart,quantity,finalizar}}>
        {children}
    </CartContext.Provider>
    )
}