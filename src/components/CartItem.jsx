/* eslint-disable react/prop-types */
import { useCart } from "../hooks/useCart";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
          <div className="cart-item-img">
            <img
              className="item-img"
              src={item.thumbnail}
              width="140px"
              height="95px"
            />
          </div>
          <span className="cart-item-name">{item.name}</span>
          <span className="cart-item-price">${item.price}</span>
          <div>  
          <div> x{item.quantity} </div>
          <button
            className="cart-delete-item"
            onClick={() => removeFromCart(item.id)}
          >
            Eliminar
          </button>
          </div>
    </div>
  );
};

export default CartItem;
