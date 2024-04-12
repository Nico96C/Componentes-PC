/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true'
  );

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => {
      const newState = !prevState;
      localStorage.setItem('isDarkMode', newState.toString());
      return newState;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};