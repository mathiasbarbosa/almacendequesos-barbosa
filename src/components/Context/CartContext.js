import  { createContext, useEffect, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const addToCart = (item, quantity) => {
        // setQuantity(cart.length)
            setCart([...cart,  item = {'nombre':item= item.title, 'quantity':quantity= cart.length,}])
            const newCart = cart
            console.log(cart);
            const resultado = newCart.find( p => p.nombre === item.nombre);
            console.log(resultado);
            newCart.forEach((p) =>{
                if (p.nombre === item.nombre) {
                    p.quantity = p.quantity + quantity
                    setCart([...cart]) 
                }
            })



    }

    const cantidadCarrito = (quantity) => {
        return cart.reduce((acc, p) => (acc + p.quantity) , 0)
    }

    
    // const removeFromCart = (productId) =>{
    //     const newCart = cart.filter ((item) => item.productId === productId )
    //     setCart(newCart)
    //     // setQuantity(quantity - 1)
    //     // console.log(quantity - 1)
    // }
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
        <CartContext.Provider value={{cart,addToCart,removeItemFromCart,quantity,cantidadCarrito}}>
            {children}
        </CartContext.Provider>
    )
}