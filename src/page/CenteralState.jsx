// CentralState.js
import { createContext, useContext, useState } from "react";

const CentralStateContext = createContext();

export const CentralStateProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  const setPopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Adjust the duration as needed
  };

  return (
    <CentralStateContext.Provider value={{ showPopup, setPopup }}>
      {children}
    </CentralStateContext.Provider>
  );
};

export const useCentralState = () => {
  return useContext(CentralStateContext);
};
