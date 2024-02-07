import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    isCartOpen : false,
    cartItems:[],
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


export const clearItemFromCartHelper = (cartItems, cartItemToClear) =>{
    return cartItems.filter((item)=> item.id !== cartItemToClear.id)
}

export const cartSlice = createSlice({
    name:'cart',
    initialState: INITIAL_STATE,
    reducers:{
        setIsCartOpen(state, action){
            state.isCartOpen = action.payload
        },
        addItemToCart(state, action){
            state.cartItems = addItemHelper(state.cartItems, action.payload)
        },
        removeItemFromCart(state, action){
            state.cartItems = removeCartItemHelper(state.cartItems, action.payload)
        },
        clearItemFromCart(state, action){
            state.cartItems = clearItemFromCartHelper(state.cartItems, action.payload)
        }
    }
})

export const {setIsCartOpen,addItemToCart,removeItemFromCart,clearItemFromCart} = cartSlice.actions

export const cartReducer = cartSlice.reducer

// (state = INITIAL_STATE, action={}) =>{

//     const {type, payload} = action

//     const {TOGGLE_CART, SET_CART_ITEMS} = CART_REDUCER_ACTIONS

//     switch (type) {
//         case TOGGLE_CART:
//             return {
//                 ...state,
//                 isCartOpen: payload
//             };
//         case SET_CART_ITEMS:
//             return{
//                 ...state,
//                 cartItems: payload
//             };
    
//         default:
//             return state
//     }
// }

