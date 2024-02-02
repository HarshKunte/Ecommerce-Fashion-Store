import { createContext, useState } from "react";
import PRODUCTS from '../shopData.json'

export const ProductContext = createContext({
  
})

export const ProductContextProvider = ({children}) =>{
    const [products, setProducts] = useState(PRODUCTS)
    return(
        <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
    )
}
