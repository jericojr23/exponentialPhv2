import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            setUser(jwt);
        }
        setLoading(false);
    }, []);

    const login = (token) => {
        setUser(token);
        localStorage.setItem('jwt', token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('jwt');
        localStorage.removeItem('isApplicant');

    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };