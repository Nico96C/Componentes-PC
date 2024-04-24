/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const PaymentModalContext = createContext();

export const usePayModal = () => useContext(PaymentModalContext);

export const PayModalProvider = ({ children }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <PaymentModalContext.Provider
      value={{ showPaymentModal, setShowPaymentModal }}
    >
      {children}
    </PaymentModalContext.Provider>
  );
};