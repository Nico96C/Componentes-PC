/* eslint-disable react/prop-types */

const CartItem = ({ product, removeFromCart }) => {
    return (
      <div className="cart-item">
        <span>{product.name}</span>
        <span>${product.price}</span>
        <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
      </div>
    );
  };
  
  export default CartItem;