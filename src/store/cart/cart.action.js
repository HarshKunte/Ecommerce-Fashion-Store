import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_REDUCER_ACTIONS } from "./cart.types"

export const setIsCartOpen = (bool) =>{
    return createAction( CART_REDUCER_ACTIONS.TOGGLE_CART, bool)
}


const addItemHelper = (cartItems, productToAdd) =>{

    const exisingItem = cartItems.find((item) => item.id === productToAdd.id)
    if(exisingItem){
        return cartItems.map((item)=> item.id === productToAdd.id? {...item, quantity: item.quantity +1}: item)
    }

    return [...cartItems, {...productToAdd, quantity:1}]
}

const removeCartItemHelper = (cartItems,cartItem) =>{
    const exisingItem = cartItems.find((item) => item.id === cartItem.id)

    if(exisingItem.quantity === 1){
        return cartItems.filter((item)=> item.id !== cartItem.id)
    }

    return cartItems.map((item)=> item.id === cartItem.id? {...item, quantity: item.quantity -1}: item)
}



export const addItemToCart = (cartItems, productToAdd) =>{
    const updatedCartItems = addItemHelper(cartItems, productToAdd)
    return createAction(CART_REDUCER_ACTIONS.SET_CART_ITEMS,updatedCartItems)
}

export const removeItemToCart = (cartItems, cartItemToRemove) =>{
    const updatedCartItems = removeCartItemHelper(cartItems, cartItemToRemove)
    return createAction(CART_REDUCER_ACTIONS.SET_CART_ITEMS,updatedCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) =>{
    const updatedCartItems = cartItems.filter((item)=> item.id !== cartItemToClear.id)
    return createAction(CART_REDUCER_ACTIONS.SET_CART_ITEMS,updatedCartItems)
}
