/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const LoginModalContext = createContext();

export const useLoginModal = () => useContext(LoginModalContext);

export const LoginProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <LoginModalContext.Provider
      value={{ showLoginModal, setShowLoginModal }}
    >
      {children}
    </LoginModalContext.Provider>
  );
};