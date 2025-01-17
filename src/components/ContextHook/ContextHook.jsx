import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light'?'dark':'light'));
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const ThemeButton = () => {
    const {theme,toggleTheme} = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} style={{backgroundColor:theme === 'light' ? '#333' : '#ddd', color:theme === 'light' ? '#fff' : '#000', borderRadius:'5px',border:'none'}}>
           Switch to {theme === 'light' ? "Dark" : "Light"} Mode
        </button>
    )
}

const ThemePage = () => {
    const{theme} = useContext(ThemeContext);
    return(
        <div style={{height:"100vh",backgroundColor:theme === 'light' ? "#fff" : "#333", color: theme === 'light' ? "#000" : "#fff"}}>
            <h2>Context Hook Example</h2>
            <h1>{theme === 'light' ? "Light Mode" : "Dark Mode"}</h1>
            <ThemeButton/>
        </div>
    )
}

const App = () => {
    return (
        <ThemeProvider>
            <ThemePage/>
        </ThemeProvider>
    )
}
export default App;