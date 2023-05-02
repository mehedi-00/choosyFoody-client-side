/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    // Create Account Email And Password 
    const resgisterWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        resgisterWithEmailPassword
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;