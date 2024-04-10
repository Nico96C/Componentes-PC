/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

//Contexto creado
export const CartContext = createContext();

//Provider Creado
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    //if para ver si esta el producto en el carrito
    const productInCart = cart.findIndex((item) => item.id === product.id);

    if (productInCart >= 0) {
      //Usando StructuredClone
      const newCart = structuredClone(cart);
      newCart[productInCart].quantity += 1;
      return setCart(newCart);
    }

    //Si el producto no esta en el carrito
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);

  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
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
