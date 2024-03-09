
import { useEffect, createContext, useState } from "react";

const AppContext = createContext("");

export default AppContext;

export const ContextManager = ({ children }) => {
    
const [currentSection,setCurrentSection] = useState(1)

  let contextData = {
    currentSection:currentSection,
    setCurrentSection:setCurrentSection
  };

  

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
