/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProbider = new GithubAuthProvider();
    // Create Account Email And Password 
    const resgisterWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // Signin With Email And Password
    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const loginWithGithub = () => {
        return signInWithPopup(auth, githubProbider);
    };
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
    },[])
    const authInfo = {
        resgisterWithEmailPassword,
        loginWithEmailAndPassword,
        loginWithGoogle,
        loginWithGithub
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;