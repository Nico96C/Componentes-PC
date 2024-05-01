/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams } from "react-router-dom";
import JSON from "../../mocks/Procesors.json";
import "../videocards.css";
import "./Productos.css";
import { useDarkMode } from "../../context/DarkMode";
import { useCart } from "../../hooks/useCart.jsx";
import BannerProce from "../../img/Category2/Procesadores.png";
import { useEffect, useState } from "react";
import { usePayModal } from "../../context/Pay.jsx";
import { Footer } from "../Footer.jsx";
import { Header } from "../Header.jsx";

const productoProce = () => {
  const { id } = useParams();
  const idBuscado = parseInt(id);

  const searchProduct = (id) => {
    const productoEncontrado = JSON.Procesadores.find(
      (producto) => producto.id === id
    );
    return productoEncontrado || null;
  };

  const [activo, setActivo] = useState(false);
  const { isDarkMode } = useDarkMode();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(
    searchProduct(idBuscado).thumbnail
  );
  const [quantity, setQuantity] = useState(1);
  const [isProducts, setIsProducts] = useState([]);
  const { showPaymentModal, setShowPaymentModal } = usePayModal();

  useEffect(() => {
    // Filtrar los productos con 'oferta: true'
    const AllProce = JSON.Procesadores;
    // Establecer los productos filtrados en el estado
    setIsProducts(AllProce);
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

  const ChangeModalPay = () => {
    setShowPaymentModal(!showPaymentModal);
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
      <Header />
      <div className="navegation">
        <button className="home-button">
          <Link to="/">Home {">"}</Link>
        </button>
        <button className="home-button">
          <Link to="/procesors">Procesadores {">"}</Link>
        </button>
        <button className="home-button">
          <Link to={`/procesors/${searchProduct(idBuscado).id}`}>
            {searchProduct(idBuscado).name}
          </Link>
        </button>
      </div>

      <div className="Container-Products-Main">
        <div className="Container-Products-Scroll">
          <div>
            <div className="Products-Banner">
              <Link href="/procesors">
                <img src={BannerProce} alt="Banner de procesadores" />
              </Link>
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
                </div>
                <div className="Products-Image-View">
                  <img src={selectedImage} loading="lazy" decoding="async" />
                </div>
                <div className="Products-Stock-Info"></div>
              </div>
              <div className="Products-Details">
                <div className="Details-Main">
                  <div className="Category-Nav">
                    <h1> PROCESADORES </h1>
                  </div>
                  <h2>
                    {searchProduct(idBuscado).type}{" "}
                    {searchProduct(idBuscado).name}
                  </h2>
                  <div className="line" />
                  <ul>
                    <li>
                      Grafica integrada:{" "}
                      {searchProduct(idBuscado).graphics
                        ? searchProduct(idBuscado).graphics
                        : "Sin grafica integrada!"}
                    </li>
                    <li>Marca: {searchProduct(idBuscado).category}</li>
                    <li>
                      Cantidad de nucleos: {searchProduct(idBuscado).core_count}
                    </li>
                    <li>
                      Reloj de nucleo: {searchProduct(idBuscado).core_clock}{" "}
                      MHz.
                    </li>
                    <li>
                      Con un Boost de: {searchProduct(idBuscado).boost_clock}{" "}
                      MHz.
                    </li>
                    <li>
                      ¿Tecnologia SMT?{" "}
                      {searchProduct(idBuscado).smt ? "SI" : "NO"}
                    </li>
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
                        <div className="up" onClick={incrementQuantity}>
                          +
                        </div>
                      </div>
                      {searchProduct(idBuscado).stock ? (
                        <button
                          className="Buy-Cart-item"
                          onClick={() => {
                            ChangeModalPay();
                            addToCart(searchProduct(idBuscado), quantity);
                          }}
                        >
                          Comprar
                        </button>
                      ) : (
                        <div className="Text-NoStock">
                          <p>No disponible</p>
                        </div>
                      )}
                    </div>
                    {searchProduct(idBuscado).stock && (
                      <button
                        className="Add-Cart-item"
                        onClick={() =>
                          addToCart(searchProduct(idBuscado), quantity)
                        }
                      >
                        Agregar al Carrito
                      </button>
                    )}
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
          <h2 className="Trends-Title">
            PRODUCTOS DESTACADOS DE ESTA CATEGORIA
          </h2>
        </div>
        <div className="Trends-Body">
          <div className="Trends-Items">
            {isProducts.slice(0, 5).map((product) => (
              <div className="Trends-Item" key={product.id}>
                <article className="Trends-MainContainer">
                  <div className="Trends-SubContainer">
                    <Link
                      className="Trends-ImgContainer"
                      href={`/procesors/${product.id}`}
                    >
                      <img
                        className="Trends-Product-Img"
                        src={product.thumbnail}
                        alt={product.name}
                      />
                    </Link>
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

      <Footer />
    </div>
  );
};

export default productoProce;
