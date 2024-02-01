import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider}from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCGB75Tb4SMNsI7Z6S9iY9Qv_X_bdVleYI",
  
    authDomain: "ecommerce-fashion-store-db.firebaseapp.com",
  
    projectId: "ecommerce-fashion-store-db",
  
    storageBucket: "ecommerce-fashion-store-db.appspot.com",
  
    messagingSenderId: "1061717862265",
  
    appId: "1:1061717862265:web:bd661fda0500ca4fa7b1a8"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
  
  export const db = getFirestore();

  export const createUserDocFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating user', error);
        }
    }

    return userDocRef
  }