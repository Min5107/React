import {createContext, useState} from 'react';

const DarkModeContext = createContext();
export default DarkModeContext;
export const DarkModeProvider = ({children, initDarkMode = true}) => {
    const [darkMode, setDarkMode] = useState(initDarkMode);
    const toggleDarkMode = () => setDarkMode(!darkMode);
    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}