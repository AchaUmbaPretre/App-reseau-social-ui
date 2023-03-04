import { createContext, useState, useEffect } from "react";

export const DarkContext = createContext();

export const DarkContextProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem('darkMode')) || false
    );

    const toggle =()=> {setDarkMode(!darkMode)}

    useEffect(()=>{
        localStorage.setItem('darkMode', darkMode)
    },[darkMode])

    return(
        <DarkContext.Provider value = {{ toggle, darkMode }} >
            {children}
        </DarkContext.Provider>
    )
}