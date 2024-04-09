/* eslint-disable react/prop-types */
import "./CartItem.css"

const CartItem = ({ product, removeFromCart }) => {
    return (
      <div className="cart-item">
        <div className="cart-item-img">
          <img className="item-img" src={product.thumbnail} width="140px" height="95px" />
        </div>
        <span className="cart-item-name">{product.name}</span>
        <span className="cart-item-price">${product.price}</span>
        <button className="cart-delete-item" onClick={() => removeFromCart(product.id)}>Eliminar</button>
      </div>
    );
  };
  
  export default CartItem;