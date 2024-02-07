import { CART_REDUCER_ACTIONS } from "./cart.types";


const INITIAL_STATE = {
    isCartOpen : false,
    cartItems:[],
  }

export const cartReducer = (state = INITIAL_STATE, action={}) =>{

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
                cartItems: payload
            };
    
        default:
            return state
    }
}

