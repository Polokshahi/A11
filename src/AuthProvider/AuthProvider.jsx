import { Children, createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase.init";





export const AuthContext = createContext();



const Provider = ({children}) => {
  const [user, setUser]= useState(null);
  const provider = new GoogleAuthProvider();


  // user signUp

  const signUp = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);
    
  }


  // signIn 

  const signIn = (email, password) =>{
     return signInWithEmailAndPassword(auth, email, password);
  }


   // google signIn
  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
  }

  // observer 

  useEffect(() =>{
    const unsubscribe  =  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

    })

    return () =>{
      unsubscribe();
    }
    
  },[]);

 


  const logOut = () => {
    return signOut(auth)

  }


    const authInfo = {
      signUp,
      signIn,
      user,
      logOut,
      googleSignIn

    }
    return (
      <AuthContext.Provider value = {authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default Provider;