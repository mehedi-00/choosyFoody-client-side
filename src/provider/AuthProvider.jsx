/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const user = { displayName: 'rasel' };
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;