/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

//Contexto creado
export const CartContext = createContext();

//Provider Creado
export function CartProvider({ children }) {
  // Obtener el estado inicial del carrito del almacenamiento local
  const cartFromLocalStorage = window.localStorage.getItem("cart");
  const initialCartState = cartFromLocalStorage
    ? JSON.parse(cartFromLocalStorage)
    : [];

  const [cart, setCart] = useState(initialCartState);
  const [isCartNotEmpty, setIsCartNotEmpty] = useState(false);

  // Guardar el estado del carrito en el almacenamiento local cuando cambie
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
    setIsCartNotEmpty(cart.length > 0);
  }, [cart]);

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const updatedCart = cart.map((item, index) =>
        index === productInCartIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
      return updatedCart;
    }

    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    return updatedCart;
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    return updatedCart;
  };

  const clearCart = () => {
    const updatedCart = [];
    setCart(updatedCart);
    return updatedCart;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartNotEmpty,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
