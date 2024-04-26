import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import motherboard from "./img/motherboard.png";
import Placas from "./img/Placas.webp";
import gaming from "./img/micro.webp";
import Razer from "./img/Razer.webp";
import Graficas from "./img/Category1/mejores-graficas.webp";
import Procesador from "./img/Category2/mejores-proce.jpg";
import Perifericos from "./img/razer-perifericos.jpg";
import DropDown from "./svg/dropdown.svg";
import PlacasJSON from "./mocks/VideoCards.json";
import ProceJSON from "./mocks/Procesors.json";
import MotherJSON from "./mocks/Motherboard.json";
import PeriJSON from "./mocks/Peripherals.json";
import BannerRazer from "./img/RazerBanner.jpg";
import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";
import { useCart } from "./hooks/useCart.jsx";
import { useDarkMode } from "./context/DarkMode.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";

function App() {
  const [isProducts, setIsProducts] = useState([]);
  const [procesador, setProcesador] = useState([]);
  const [perifericos, setPerifericos] = useState([]);
  const [mothers, setMothers] = useState([]);
  const [activo, setActivo] = useState(false);
  const { addToCart } = useCart();
  const { isDarkMode } = useDarkMode();

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

  useEffect(() => {
    // Filtrar los productos con 'oferta: true'
    const AllVideo = PlacasJSON.VideoCards;
    const AllProcesador = ProceJSON.Procesadores;
    const AllMother = MotherJSON.Motherboard;
    const AllPeri = PeriJSON.perifericos;
    // Establecer los productos filtrados en el estado

    setProcesador(AllProcesador);
    setIsProducts(AllVideo);
    setMothers(AllMother);
    setPerifericos(AllPeri);
  }, []);

  return (
    <>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Header />

        <nav className="All-Categories">
          <div className="Categories-Container">
            <div className="Categories">
              <div className="Category-Element">
                <span className="Category-tag">
                  <a className="Category-link" href="./videocards">
                    PLACAS DE VIDEO
                  </a>
                </span>
              </div>
              <div className="Category-Element">
                <span className="Category-tag">
                  <a className="Category-link" href="./procesors">
                    PROCESADORES
                  </a>
                </span>
              </div>
              <div className="Category-Element">
                <span className="Cartegory-tag">
                  <a className="Category-link" href="./motherboard">
                    MOTHERBOARD
                  </a>
                </span>
              </div>
              <div className="Category-Element">
                <span className="Category-tag">
                  <a className="Category-link" href="./peripherals">
                    PERIFERICOS
                  </a>
                </span>
              </div>
            </div>
            <div className="Category-drop">
              <ul className="List">
                <li>
                  <a href="#">
                    VER CATEGORIAS
                    <img
                      src={DropDown}
                      className="Drop-SVG"
                      alt="Categorias Drop"
                      loading="lazy"
                    />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="./videocards">PLACAS DE VIDEO</a>
                    </li>
                    <li>
                      <a href="./procesors">PROCESADORES</a>
                    </li>
                    <li>
                      <a href="./motherboard">MOTHERBOARD</a>
                    </li>
                    <li>
                      <a href="./peripherals">PERIFERICOS</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="Web-Container">
          <div className="Carrousel-Seccion">
            <div className="Carrousel-Item">
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
              >
                <div className="Carrousel-ImageWrapper">
                  <img
                    src={motherboard}
                    alt="motherboard-Image"
                    className="Image-Corrousel"
                    loading="lazy"
                  />
                  <div className="Carrousel-Text">
                    <h1>¡Marcas Lideres y de Calidad! MSI, ASUS y GIGABYTE!</h1>
                    <a href="/motherboard">
                      <button>Explora</button>
                    </a>
                  </div>
                </div>
                <div className="Carrousel-ImageWrapper">
                  <img
                    src={Placas}
                    alt="Placas-Video-Image"
                    className="Image-Corrousel"
                    loading="lazy"
                  />
                  <div className="Carrousel-Text">
                    <h1> Las mejores Placas de Video! AMD y NVIDIA </h1>
                    <a href="/videocards">
                      <button>Ver Precios</button>
                    </a>
                  </div>
                </div>
                <div className="Carrousel-ImageWrapper">
                  <img
                    src={gaming}
                    alt="PC-Gamer-Image"
                    className="Image-Corrousel"
                    loading="lazy"
                  />
                  <div className="Carrousel-Text">
                    <h1>
                      {" "}
                      Intel y AMD! La potencia de procesado que necesita tu PC.
                    </h1>
                    <a href="/procesors">
                      <button>Ver Más</button>
                    </a>
                  </div>
                </div>
                <div className="Carrousel-ImageWrapper">
                  <img
                    src={Razer}
                    alt="Razer-Image"
                    className="Image-Corrousel"
                    loading="lazy"
                  />
                  <div className="Carrousel-Text">
                    <h1>Razer! Todo para Gamers</h1>
                    <a href="/peripherals">
                      {" "}
                      <button>Ver más</button>{" "}
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div className="Featured-Container">
            <h2 className="Featured-Title"> ¡Lo mas destacado! </h2>
            <div className="Featured-Main-Container">
              <div className="Featured-Links">
                <Link className="videocards-link" to="/videocards">
                  <div className="Featured-Contain">
                    <span>
                      <img
                        className="Featured-Img-Video"
                        src={Graficas}
                        alt="Graphic Cards"
                        width="100%"
                        loading="lazy"
                      />
                      <div className="overlay">
                        <p className="text-menu">
                          LAS MEJORES PLACAS DE VIDEO CON HASTA ¡6 CUOTAS SIN
                          INTERES!
                        </p>
                      </div>
                    </span>
                  </div>
                </Link>
                <Link className="videocards-link" to="/procesors">
                  <div className="Featured-Contain">
                    <span>
                      <img
                        className="Featured-Img-Video"
                        src={Procesador}
                        alt="CPU's"
                        width="100%"
                        loading="lazy"
                      />
                      <div className="overlay">
                        <p className="text-menu">
                          LO MEJOR DE INTEL Y SUS ULTIMAS GENERACIONES CON EL
                          MEJOR PRECIO
                        </p>
                      </div>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="Featured-Links">
                <a className="videocards-link" href="#razer-section">
                  <div className="Featured-Contain">
                    <span>
                      <img
                        className="Featured-Img-Video"
                        src={Perifericos}
                        alt="Razer"
                        width="105%"
                        loading="lazy"
                      />
                      <div className="overlay">
                        <p className="text-menu">
                          RAZER, PRECIO Y CALIDAD DE INCREIBLES PERIFERICOS!
                          AHORA EN 12 CUOTAS FIJAS
                        </p>
                      </div>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="Trends-Container">
            <div className="Trends-Header">
              <h2 className="Trends-Title">
                LAS TENDENCIAS EN PLACAS DE VIDEO
              </h2>
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
                            loading="lazy"
                          />
                        </a>
                        <div className="Trends-Product-Info">
                          <div className="Product-Stock">
                            <div className="Product-tags">
                              <div className="Product-cardtag">
                                <p>
                                  {" "}
                                  {`${
                                    product.stock ? "En Stock" : "Sin Stock"
                                  }`}
                                </p>
                              </div>
                            </div>
                          </div>
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
                        onClick={() => addToCart(product, 1)}
                      >
                        Añadir al Carrito
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="Mas-Button">
              <a href="/videocards">+ VER MAS</a>
            </button>
          </div>

          <div className="Trends-Container">
            <div className="Trends-Header">
              <h2 className="Trends-Title"> LAS TENDENCIAS EN PROCESADORES </h2>
            </div>
            <div className="Trends-Body">
              <div className="Trends-Items">
                {procesador.slice(0, 5).map((proce) => (
                  <div className="Trends-Item" key={proce.id}>
                    <article className="Trends-MainContainer">
                      <div className="Trends-SubContainer">
                        <a
                          className="Trends-ImgContainer"
                          href={`/procesors/${proce.id}`}
                        >
                          <img
                            className="Trends-Product-Img"
                            src={proce.thumbnail}
                            alt={proce.name}
                            loading="lazy"
                          />
                        </a>
                        <div className="Trends-Product-Info">
                          <div className="Product-Stock">
                            <div className="Product-tags">
                              <div className="Product-cardtag">
                                <p>
                                  {`${proce.stock ? "En Stock" : "Sin Stock"}`}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="Product-Main-Info">
                            <h3> {proce.name} </h3>
                          </div>
                          <span className="Product-Main-Price">{`$${proce.price}`}</span>
                        </div>
                      </div>
                    </article>
                    <div className="Trends-Product-Buy">
                      <button
                        className="Buy-Button"
                        onClick={() => addToCart(proce, 1)}
                      >
                        Añadir al Carrito
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="Mas-Button">
              <a href="/procesors">+ VER MAS</a>
            </button>
          </div>

          <div className="Trends-Container">
            <div className="Trends-Header">
              <h2 className="Trends-Title"> LAS TENDENCIAS EN MOTHERS </h2>
            </div>
            <div className="Trends-Body">
              <div className="Trends-Items">
                {mothers.slice(0, 5).map((mother) => (
                  <div className="Trends-Item" key={mother.id}>
                    <article className="Trends-MainContainer">
                      <div className="Trends-SubContainer">
                        <a
                          className="Trends-ImgContainer"
                          href={`/motherboard/${mother.id}`}
                        >
                          <img
                            className="Trends-Product-Img"
                            src={mother.thumbnail}
                            alt={mother.name}
                            loading="lazy"
                          />
                        </a>
                        <div className="Trends-Product-Info">
                          <div className="Product-Stock">
                            <div className="Product-tags">
                              <div className="Product-cardtag">
                                <p>
                                  {`${mother.stock ? "En Stock" : "Sin Stock"}`}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="Product-Main-Info">
                            <h3> {mother.name} </h3>
                          </div>
                          <span className="Product-Main-Price">{`$${mother.price}`}</span>
                        </div>
                      </div>
                    </article>
                    <div className="Trends-Product-Buy">
                      <button
                        className="Buy-Button"
                        onClick={() => addToCart(mother, 1)}
                      >
                        Añadir al Carrito
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="Mas-Button">
              <a href="/motherboard">+ VER MAS</a>
            </button>
          </div>

          <div className="Trends-Container">
            <div
              className="Trends-Header"
              id="razer-section"
              style={{ backgroundImage: `url(${BannerRazer})` }}
            />

            <div className="Trends-Subheader">
              <h2 className="Trends-Title"> ¡LOS MEJORES PERIFERICOS! </h2>
            </div>
            <div className="Trends-Body">
              <div className="Trends-Items">
                {perifericos.slice(0, 5).map((periferico) => (
                  <div className="Trends-Item" key={periferico.id}>
                    <article className="Trends-MainContainer">
                      <div className="Trends-SubContainer">
                        <a
                          className="Trends-ImgContainer"
                          href={`/peripherals/${periferico.id}`}
                        >
                          <img
                            className="Trends-Product-Img"
                            src={periferico.thumbnail}
                            alt={periferico.name}
                            loading="lazy"
                          />
                        </a>
                        <div className="Trends-Product-Info">
                          <div className="Product-Stock">
                            <div className="Product-tags">
                              <div className="Product-cardtag">
                                <p>
                                  {`${
                                    periferico.stock ? "En Stock" : "Sin Stock"
                                  }`}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="Product-Main-Info">
                            <h3> {periferico.name} </h3>
                          </div>
                          <span className="Product-Main-Price">{`$${periferico.price}`}</span>
                        </div>
                      </div>
                    </article>
                    <div className="Trends-Product-Buy">
                      <button
                        className="Buy-Button"
                        onClick={() => addToCart(periferico, 1)}
                      >
                        Añadir al Carrito
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="Mas-Button">
              <a href="/peripherals">+ VER MAS</a>
            </button>
            <div
              className="Trends-Header"
              style={{ backgroundImage: `url(${BannerRazer})` }}
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
