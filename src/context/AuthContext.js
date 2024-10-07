import React, { createContext, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        const response = await api.post('/users/login', { username, password });
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
    };

    const signup = async (username, password) => {
        await api.post('/users/signup', { username, password, role: 'user' });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};