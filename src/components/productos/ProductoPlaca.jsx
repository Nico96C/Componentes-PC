/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams } from "react-router-dom";
import "../videocards.css";
import "./Productos.css";
import JSON from "../../mocks/VideoCards.json";
import { useDarkMode } from "../../context/DarkMode";
import SolIcon from "../../svg/sol.jsx";
import LunaIcon from "../../svg/luna.jsx";
import Logo from "../../svg/logo.svg";
import ShoppingCart from "../../svg/shopping-cart.svg";
import { useCart } from "../../hooks/useCart.jsx";
import ModalCarrito from "../modalCarrito.jsx";
import HamburgerButton from "../hamburgerButton.jsx";
import { useEffect, useState } from "react";

const productoPlaca = () => {
  const { id } = useParams();
  const idBuscado = parseInt(id);

  const searchProduct = (id) => {
    const productoEncontrado = JSON.VideoCards.find(
      (producto) => producto.id === id
    );
    return productoEncontrado || null;
  };

  const [activo, setActivo] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { addToCart, isCartNotEmpty } = useCart();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800 && activo) {
        //Verifica que el estado sea true y segun resolucion pasa el estado a false.
        setActivo(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activo]);

  const handleClick = () => {
    if (window.innerWidth <= 800) {
      setActivo(!activo);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="Placas-Product-Main">
      <div className="Placas-Header">
        <div className="Placas-Navegation">
          <div className="navegation">
            <button className="home-button">
              <Link to="/">Home {">"}</Link>
            </button>
            <button className="home-button">
              <Link to="/videocards">Placas de Video {">"}</Link>
            </button>
            <button className="home-button">
              <Link to={`/videocards/${searchProduct(idBuscado).id}`}>
                {searchProduct(idBuscado).chipset}
              </Link>
            </button>
          </div>

          <div>
            <a href="/">
              <img src={Logo} alt="Componentes PC Logo" className="Logo" />
            </a>
          </div>

          {isCartOpen && <ModalCarrito onClose={toggleCart} />}

          <div className={`Buttons ${activo ? "active" : ""}`}>
              <div
                className={`Cart-Button ${
                  isCartNotEmpty ? "cart-not-empty" : ""
                }`}
                onClick={() => {
                  toggleCart();
                  handleClick();
                }}
              >
                <img
                  src={ShoppingCart}
                  alt="Componentes PC CartIcon"
                  className="Cart"
                />
                {activo && <span className="NavBar-Text"> Carrito </span>}
              </div>

              <div
                className="Button-Mode-1"
                onClick={() => {
                  toggleDarkMode();
                }}
              >
                {isDarkMode ? (
                  <>
                    <SolIcon />
                    {activo && (
                      <span className="NavBar-Text"> Modo Oscuro </span>
                    )}
                  </>
                ) : (
                  <>
                    <LunaIcon />
                    {activo && (
                      <span className="NavBar-Text"> Modo Claro </span>
                    )}
                  </>
                )}
              </div>
          </div>

          <div className="burger">
            <HamburgerButton activo={activo} handleClick={handleClick} />
          </div>
          <div className={`initial ${activo ? "active" : ""}`}></div>
        </div>
      </div>
      <div>
        <img
          src={searchProduct(idBuscado).thumbnail}
          width={200}
          height={150}
        />
      </div>
    </div>
  );
};

export default productoPlaca;
