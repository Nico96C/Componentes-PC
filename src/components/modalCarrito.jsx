/* eslint-disable react/prop-types */
import CartItem from './CartItem.jsx';
import "./modalCarrito.css"

const ModalCarrito = ({ cartItems, removeFromCart, onClose }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const modalClassName = onClose ? 'cart-modal active' : 'cart-modal';

  return (
    <div className="cart-modal-overlay">
      <div className={modalClassName}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Carrito de Compras</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
          ))}
        </div>
        <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ModalCarrito;