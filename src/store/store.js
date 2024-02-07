
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import { configureStore } from '@reduxjs/toolkit'

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean)

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    }).concat(middleWares)
})