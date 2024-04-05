/* eslint-disable react/prop-types */
import "./hamburgerButton.css";

function BurgerButton(props) {
  return (
    <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.activo ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerButton
