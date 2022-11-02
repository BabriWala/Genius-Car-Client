import React, { useEffect, useState } from 'react';
import {createContext} from 'react';
import app from '../../Firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app)

 const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createuser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
     }
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        user,
        loading,
        createuser,
        login,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser);
        });
        return ()=>{
            return unsubscribe;
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}   
        </AuthContext.Provider>
    );
};

export default AuthProvider;