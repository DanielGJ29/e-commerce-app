import { useState } from "react";
import { createContext } from "react";

//Context
const DarkModeContext = createContext();

//Provider
const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState("primary");

  //Funtions
  //const handleDarkMode = () => setDarkMode(!darkMode);
  const handleDarkMode = (value) => {
    setDarkMode(value);
  };

  const data = {
    darkMode,
    handleDarkMode,
  };
  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};

export { DarkModeProvider };
export default DarkModeContext;
