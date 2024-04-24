/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Cart";
import { usePayModal } from "../context/Pay";
import "./payModal.css";
import { useDarkMode } from "../context/DarkMode";

export function PayModal({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { cart, clearCart } = useContext(CartContext);
  const { showPaymentModal } = usePayModal();
  const { isDarkMode } = useDarkMode();

  const handleInputChange = (field, value) => {
    switch (field) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "cardNumber":
        setCardNumber(value);
        break;
      default:
        break;
    }
  };

  const handleFinishPay = () => {
    // Verificar si todos los campos están rellenados
    if (firstName && lastName && address && cardNumber) {
      setIsValid(true);
      clearCart(); // Limpia todo el carrito
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleCloseThankYouModal = () => {
    setIsValid(false);
    onClose();
  };

  const modeClassName = isDarkMode ? "dark-mode" : "light-mode";

  return (
    <>
      <div className="modal-overlay" onClick={handleCloseModal}>
        <div
          className={`modalPay ${
            showPaymentModal ? "show" : ""
          } ${modeClassName}`}
        >
          <div className="modal-head">
            <h2>Formulario de Pago</h2>
          </div>

          <div className={`modal-content ${modeClassName}`}>
            <div className="modal-form">
              <div className="modal-fields">
                <label htmlFor="firstName">Nombre </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                />
                <label htmlFor="lastName">Apellido </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                />
              </div>

              <div className="modal-fields">
                <label htmlFor="address">Dirección </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
                <label htmlFor="cardNumber">Tarjeta </label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) =>
                    handleInputChange("cardNumber", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="modal-Cartpay">
              <h3>Items del Carrito</h3>

              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price} - x{item.quantity}
                  </li>
                ))}
              </ul>
              <div className="modal-endpay">
                <button onClick={handleFinishPay}>Terminar Pago</button>
                <h5> Total: ${totalPrice.toFixed(2)} </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isValid && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className={`modalPay-2 show ${modeClassName}`}>
            <div className="modal-content">
              <span className="close" onClick={handleCloseThankYouModal}>
                &times;
              </span>
              <h2>¡Gracias por tu compra!</h2>
              <p>Tu pedido ha sido procesado exitosamente.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
