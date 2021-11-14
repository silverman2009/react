import { useState, createContext } from "react";

export const writeComponent = createContext();

export const WriteProvider = ({ children }) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <writeComponent.Provider value={{ isClick, setIsClick }}>
      {children}
    </writeComponent.Provider>
  );
};
