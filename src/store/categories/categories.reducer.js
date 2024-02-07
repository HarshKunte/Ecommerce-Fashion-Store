import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES_INITIAL_STATE = {
    categoriesMap:{}
}

export const categoriesSlice = createSlice({
    name:'categories',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers:{
        setCategoriesMap(state, action){
            state.categoriesMap = action.payload
        }
    }
})

export const {setCategoriesMap} = categoriesSlice.actions

export const categoriesReducer = categoriesSlice.reducer

// ( state= CATEGORIES_INITIAL_STATE, action = {}) =>{
//     const {type, payload} = action

//     switch (type) {
//         case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
//             return {
//                 ...state,
//                 categoriesMap: payload
//             } 
//         default:
//             return state;
//     }
// }