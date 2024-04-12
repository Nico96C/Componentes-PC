/* eslint-disable react/prop-types */
import { useEffect } from "react";
import CartItem from "./CartItem.jsx";
import "./modalCarrito.css";
import { useCart } from "../hooks/useCart.jsx";

const ModalCarrito = ({ onClose }) => {
  const { cart } = useCart();
  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const modalClassName = onClose ? "cart-modal active" : "cart-modal";

  return (
    <div className="cart-modal-overlay">
      <div className={modalClassName}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2 className="cart-title"> Carrito de Compras </h2>
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <div className="cart-footer">
          <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalCarrito;
