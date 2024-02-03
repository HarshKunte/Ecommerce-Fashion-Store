import { createContext, useEffect, useState } from "react";

const addItemHelper = (cartItems, productToAdd) =>{

    const exisingItem = cartItems.find((item) => item.id === productToAdd.id)
    if(exisingItem){
        return cartItems.map((item)=> item.id === productToAdd.id? {...item, quantity: item.quantity +1}: item)
    }

    return [...cartItems, {...productToAdd, quantity:1}]
}

const calcCartItemsCount = (cartItems) =>{
    return cartItems.reduce((acc, item)=> acc+item.quantity, 0)
}

const calcCartTotal = (cartItems) =>{
    return cartItems.reduce((acc, item)=> acc+(item.quantity*item.price), 0)
}

const removeCartItemHelper = (cartItems,cartItem) =>{
    const exisingItem = cartItems.find((item) => item.id === cartItem.id)

    if(exisingItem.quantity === 1){
        return cartItems.filter((item)=> item.id !== cartItem.id)
    }

    return cartItems.map((item)=> item.id === cartItem.id? {...item, quantity: item.quantity -1}: item)
}

export const CartContext = createContext({
  isCartOpen : false,
  setIsCartOpen: () => {},
  cartItems:[],
  addItemToCart:()=>{},
  cartItemsCount:0
})

export const CartContextProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        setCartItemsCount(calcCartItemsCount(cartItems))
        setCartTotal(calcCartTotal(cartItems))
        
    }, [cartItems]);

    const addItemToCart = (productToAdd) =>{
        const updatedCartItems = addItemHelper(cartItems, productToAdd)
        setCartItems(updatedCartItems)
    }

    const removeItemToCart = (cartItemToRemove) =>{
        const updatedCartItems = removeCartItemHelper(cartItems, cartItemToRemove)
        setCartItems(updatedCartItems)
    }

    const clearItemFromCart = (cartItemToClear) =>{
        setCartItems(cartItems.filter((item)=> item.id !== cartItemToClear.id))
    }

    const value = {isCartOpen, setIsCartOpen, cartItems,  addItemToCart, cartItemsCount, removeItemToCart, clearItemFromCart, cartTotal}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
