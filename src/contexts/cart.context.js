import { createContext, useReducer } from "react";

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

export const CART_REDUCER_ACTIONS = {
    TOGGLE_CART : 'TOGGLE_CART',
    SET_CART_ITEMS:'SET_CART_ITEMS',
}

const cartReducer = (state, action) =>{

    const {type, payload} = action

    const {TOGGLE_CART, SET_CART_ITEMS} = CART_REDUCER_ACTIONS

    switch (type) {
        case TOGGLE_CART:
            return {
                ...state,
                isCartOpen: payload
            };
        case SET_CART_ITEMS:
            return{
                ...state,
                ...payload
            };
    
        default:
            break;
    }
}

const INITIAL_STATE = {
  isCartOpen : false,
  cartItems:[],
  cartItemsCount:0,
  cartTotal:0
}

export const CartContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const {isCartOpen, cartItems, cartItemsCount, cartTotal} = state

    const setIsCartOpen = (bool) =>{
        dispatch({type: CART_REDUCER_ACTIONS.TOGGLE_CART, payload:bool})
    }

    const updateCartItemsReducer = (newCartItems) =>{
        const newCartCount = calcCartItemsCount(newCartItems)
        const newCartTotal = calcCartTotal(newCartItems)
        dispatch({type:CART_REDUCER_ACTIONS.SET_CART_ITEMS, payload:{cartItems:newCartItems, cartTotal:newCartTotal, cartItemsCount:newCartCount}})
    }

    const addItemToCart = (productToAdd) =>{
        const updatedCartItems = addItemHelper(cartItems, productToAdd)
        updateCartItemsReducer(updatedCartItems)
    }

    const removeItemToCart = (cartItemToRemove) =>{
        const updatedCartItems = removeCartItemHelper(cartItems, cartItemToRemove)
        updateCartItemsReducer(updatedCartItems)
    }

    const clearItemFromCart = (cartItemToClear) =>{
        updateCartItemsReducer(cartItems.filter((item)=> item.id !== cartItemToClear.id))
    }

    const value = {isCartOpen, setIsCartOpen, cartItems,  addItemToCart, cartItemsCount, removeItemToCart, clearItemFromCart, cartTotal}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
