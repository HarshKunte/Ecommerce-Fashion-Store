import { createContext, useEffect, useState } from "react"
import { createUserDocFromAuth, onAuthStateChangeListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
})

export const UserProvider = ({children}) =>{

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener((user)=>{
            if (user){
                createUserDocFromAuth(user)
            }
            setCurrentUser(user)
        })
        return () => {
            unsubscribe()
        };
    }, []);

    const [currentUser, setCurrentUser] = useState(null)
    return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>
}