import React, { createContext } from "react";
export const GeneralContext = createContext();
const ContextProvider = ({ children }) => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <GeneralContext.Provider value={{categories}}>{children}</GeneralContext.Provider>
  );
};

export default ContextProvider;
