import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider =({childeren})=>{
    const [currentUser,setCurrentUser]= useState({});
     
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
            console.log(user)

        },[])
    });
    <AuthContext.Provider value={currentUser} >
        {childeren}
    </AuthContext.Provider>
}



