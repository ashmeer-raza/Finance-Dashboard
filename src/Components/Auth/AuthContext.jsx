import React, { createContext, useContext, useState, useEffect } from 'react';



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('fintrack_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (email, password) => {

        const userData = { email, name: 'Ashmeer', id: Date.now() };
        setUser(userData);
        localStorage.setItem('fintrack_user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('fintrack_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);