/* eslint-disable react/prop-types */
import { useEffect } from "react";
import CartItem from "./CartItem.jsx";
import "./modalCarrito.css";

const ModalCarrito = ({ cartItems, removeFromCart, onClose }) => {
  useEffect(() => {
    // Agregar la clase 'modal-open' al cuerpo del documento cuando la modal está abierta
    document.body.classList.add("modal-open");

    // Remover la clase 'modal-open' del cuerpo del documento cuando la modal se cierra
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const modalClassName = onClose ? "cart-modal active" : "cart-modal";

  return (
    <div className="cart-modal-overlay">
      <div className={modalClassName}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2 className="cart-title"> Carrito de Compras </h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        <div className="cart-footer">
          <div>1</div>
          <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalCarrito;
