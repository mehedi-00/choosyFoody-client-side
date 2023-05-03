/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    
    const githubProbider = new GithubAuthProvider();

    // Create Account Email And Password 
    const resgisterWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // Signin With Email And Password
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const loginWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProbider);
    };
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        };
    }, []);
    const authInfo = {
        user,
        loading,
        resgisterWithEmailPassword,
        loginWithEmailAndPassword,
        loginWithGoogle,
        loginWithGithub,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;