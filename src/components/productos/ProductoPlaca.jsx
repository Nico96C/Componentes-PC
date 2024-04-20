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
import InstagramIcon from "../../svg/instagram.jsx";
import LinkedInIcon from "../../svg/linkedin.jsx";
import GithubIcon from "../../svg/github.jsx";

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
  const [selectedImage, setSelectedImage] = useState(
    searchProduct(idBuscado).thumbnail
  );
  const [quantity, setQuantity] = useState(1);
  const [isProducts, setIsProducts] = useState([]);

  useEffect(() => {
    // Filtrar los productos con 'oferta: true'
    const AllVideo = JSON.VideoCards;
    // Establecer los productos filtrados en el estado
    setIsProducts(AllVideo);
  }, []);

  const incrementQuantity = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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

  const modeClassName = isDarkMode ? "dark-mode" : "light-mode";

  return (
    <div className={`Placas-Product-Main ${modeClassName}`}>
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
                  <img src={selectedImage} loading="lazy" decoding="async" />
                </div>
                <div className="Products-Stock-Info"></div>
              </div>
              <div className="Products-Details">
                <div className="Details-Main">
                  <div className="Category-Nav">
                    <h1> PLACAS DE VIDEO </h1>
                  </div>
                  <h2>
                    {searchProduct(idBuscado).type}{" "}
                    {searchProduct(idBuscado).chipset}{" "}
                    {searchProduct(idBuscado).name}
                  </h2>
                  <div className="line"></div>
                  <ul>
                    <li>{searchProduct(idBuscado).text}</li>
                    <li>Marca: {searchProduct(idBuscado).category}</li>
                    <li>{searchProduct(idBuscado).memory} GB de memoria.</li>
                    <li>
                      Reloj de nucleo: {searchProduct(idBuscado).core_clock}{" "}
                      MHz.
                    </li>
                    <li>
                      Con un Boost de: {searchProduct(idBuscado).boost_clock}{" "}
                      MHz.
                    </li>
                    <li>{searchProduct(idBuscado)["text-2"]}</li>
                    <li>{searchProduct(idBuscado)["text-3"]}</li>
                    <li>Color: {searchProduct(idBuscado).color}.</li>
                    <li>Longitud de: {searchProduct(idBuscado).length} mm.</li>
                  </ul>
                </div>
                <div className="Details-Purchase">
                  <div className="Details-SpecialPrice">
                    <div className="Special-Price">
                      <h2>$ {searchProduct(idBuscado).price}</h2>
                      <h3>Exclusivo para transferencias y deposito bancario</h3>
                    </div>
                  </div>

                  <div className="Details-SpecialPrice">
                    <div className="Special-Price">
                      <h2>$ {searchProduct(idBuscado).subprice}</h2>
                      <h3 className="Info-SubPrice">
                        Tambien tienes 6 cuotas sin interes en este producto.
                      </h3>
                    </div>
                  </div>

                  <div className="Details-Buy-Buttons">
                    <div className="Details-buy-item">
                      <div className="Selector">
                        <div className="down" onClick={decrementQuantity}>
                          —
                        </div>
                        <input
                          className="Quantity-Cart"
                          value={quantity}
                          onChange={(e) =>
                            setQuantity(parseInt(e.target.value))
                          }
                        ></input>
                        <div
                          className="up"
                          onClick={incrementQuantity}
                        >
                          +
                        </div>
                      </div>
                      <button className="Buy-Cart-item"> Comprar </button>
                    </div>
                    <button className="Add-Cart-item"
                    onClick={() => addToCart(searchProduct(idBuscado))}>
                      Agregar al Carrito
                    </button>
                  </div>
                  <div className="Details-Tags"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Trends-Container">
        <div className="Trends-Header">
          <h2 className="Trends-Title">PRODUCTOS DESTACADOS DE ESTA CATEGORIA</h2>
        </div>
        <div className="Trends-Body">
          <div className="Trends-Items">
            {isProducts.slice(0, 5).map((product) => (
              <div className="Trends-Item" key={product.id}>
                <article className="Trends-MainContainer">
                  <div className="Trends-SubContainer">
                    <a
                      className="Trends-ImgContainer"
                      href={`/videocards/${product.id}`}
                    >
                      <img
                        className="Trends-Product-Img"
                        src={product.thumbnail}
                        alt={product.name}
                      />
                    </a>
                    <div className="Trends-Product-Info">
                      <div className="Product-Stock"></div>
                      <div className="Product-Main-Info">
                        <h3> {product.chipset} </h3>
                        <h5> {product.name} </h5>
                      </div>
                      <span className="Product-Main-Price">{`$${product.price}`}</span>
                    </div>
                  </div>
                </article>
                <div className="Trends-Product-Buy">
                  <button
                    className="Buy-Button"
                    onClick={() => addToCart(product)}
                  >
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="Web-End">
        <div className="Web-End-Containers">
          <section className="Web-End-Categorys">
            <h4> CATEGORIAS DETACADAS </h4>
            <nav>
              <ul>
                <li>
                  <a href="/videocards">Placas de Video</a>
                </li>
                <li>
                  <a href="/procesors">Procesadores</a>
                </li>
                <li>
                  <a href="#">Motherboards</a>
                </li>
                <li>
                  <a href="#">Mouse</a>
                </li>
              </ul>
            </nav>
          </section>
          <div className="Web-End-SocialMedia">
            <section className="Redes">
              <h4>REDES Y CONTACTO</h4>
              <div className="Redes-link">
                <a href="https://www.instagram.com/megabits96/" target="_blank">
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolás-andres-cuello"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
                <a href="https://www.Github.com/Nico96C" target="_blank">
                  <GithubIcon />
                </a>
              </div>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default productoPlaca;
