import { createContext, useState } from "react";

const addItemHelper = (cartItems, productToAdd) =>{

    const exisingItem = cartItems.find((item) => item.id === productToAdd.id)
    if(exisingItem){
        return cartItems.map((item)=> item.id === productToAdd.id? {...item, quantity: item.quantity +1}: item)
    }

    return [...cartItems, {...productToAdd, quantity:1}]
}

export const CartContext = createContext({
  isCartOpen : false,
  setIsCartOpen: () => {},
  cartItems:[],
  addItemToCart:()=>{}
})

export const CartContextProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) =>{
        setCartItems(addItemHelper(cartItems, productToAdd))
    }


    return(
        <CartContext.Provider value={{isCartOpen, setIsCartOpen, cartItems,  addItemToCart}}>{children}</CartContext.Provider>
    )
}
