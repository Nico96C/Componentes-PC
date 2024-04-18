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
import BannerVideo from "../../img/Category1/PLACASVIDEO.png";
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
  const [selectedImage, setSelectedImage] = useState(searchProduct(idBuscado).thumbnail);

  const handleThumbnailClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

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

  /*
  <img
          src={searchProduct(idBuscado).thumbnail}
          width={200}
          height={150}
        />
  */

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
                  {activo && <span className="NavBar-Text"> Modo Oscuro </span>}
                </>
              ) : (
                <>
                  <LunaIcon />
                  {activo && <span className="NavBar-Text"> Modo Claro </span>}
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

      <div className="Container-Products-Main">
        <div className="Container-Products-Scroll">
          <div>
            <div className="Products-Banner">
              <a href="/videocards">
                <img src={BannerVideo} alt="Banner de placas video" />
              </a>
            </div>
          </div>
          <div className="Products-General">
            <div className="Products-View-Container">
              <div className="Products-View">
                <div className="Products-Images">
                  <img
                    src={searchProduct(idBuscado).thumbnail}
                    onClick={() =>
                      handleThumbnailClick(searchProduct(idBuscado).thumbnail)
                    }
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={searchProduct(idBuscado)["img-1"]}
                    onClick={() =>
                      handleThumbnailClick(searchProduct(idBuscado)["img-1"])
                    }
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={searchProduct(idBuscado)["img-2"]}
                    onClick={() =>
                      handleThumbnailClick(searchProduct(idBuscado)["img-2"])
                    }
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="Products-Image-View">
                  <img
                    src={selectedImage}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="Products-Stock-Info"></div>
              </div>
              <div className="Products-Details">
                <div className="Details-Main">
                  <div className="Category-Nav">
                    <h1> PLACAS DE VIDEO </h1>
                  </div>
                  <h2>
                    {searchProduct(idBuscado).chipset}{" "}
                    {searchProduct(idBuscado).name}
                  </h2>
                  <ul>
                    <li>{searchProduct(idBuscado).text}</li>
                    <li>{searchProduct(idBuscado).category}</li>
                    <li>{searchProduct(idBuscado).memory} GB de memoria.</li>
                    <li>
                      Reloj de nucleo: {searchProduct(idBuscado).core_clock}
                    </li>
                    <li>
                      Con un Boost de: {searchProduct(idBuscado).boost_clock}
                    </li>
                    <li>Color: {searchProduct(idBuscado).color}</li>
                    <li>Longitud de: {searchProduct(idBuscado).length} mm</li>
                  </ul>
                </div>
                <div className="Details-Purchase">
                  <div className="Details-SpecialPrice">
                    <div className="Special-Price">
                      <h2>
                        $ {searchProduct(idBuscado).price}
                      </h2>
                      <h3> Exclusivo para transferencias y deposito bancario </h3>
                    </div>
                  </div>
                  <div className="Details-FinalPrice"></div>
                  <div className="Details-Buy-Buttons"></div>
                  <div className="Details-Tags"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productoPlaca;
