/* eslint-disable react/prop-types */
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

import { createContext, useState } from "react";

//Update LocalStorage
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

//Contexto creado
export const CartContext = createContext();

//Provider Creado
export function CartProvider({ children }) {
  const [cart, setCart] = useState(cartInitialState);

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
  
    if (productInCartIndex >= 0) {
      const updatedCart = cart.map((item, index) =>
        index === productInCartIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      updateLocalStorage(updatedCart);
      return updatedCart;
    }
  
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
    return updatedCart;
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
    return updatedCart;
  };
  
  const clearCart = () => {
    const updatedCart = [];
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
    return updatedCart;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
