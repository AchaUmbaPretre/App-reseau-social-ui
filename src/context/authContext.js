import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = async (input)=> {
        const res = await axios.post('http://localhost:8800/api/auth/login', input, {
            withCredentials: true,
        });
        setCurrentUser(res.data)
    }

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(currentUser));
    },[currentUser])

    return(
        <AuthContext.Provider value = {{ login, currentUser }} >
            {children}
        </AuthContext.Provider>
    )
}