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
import { useDarkMode } from "./context/DarkMode.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { ProductsView } from "./components/ProductsView.jsx";

function App() {
  const [placasVideo, setPlacasVideo] = useState([]);
  const [procesador, setProcesador] = useState([]);
  const [perifericos, setPerifericos] = useState([]);
  const [mothers, setMothers] = useState([]);
  const [activo, setActivo] = useState(false);
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
    setPlacasVideo(AllVideo);
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
                  <Link className="Category-link" to="/videocards">
                    PLACAS DE VIDEO
                  </Link>
                </span>
              </div>
              <div className="Category-Element">
                <span className="Category-tag">
                  <Link className="Category-link" to="/procesors">
                    PROCESADORES
                  </Link>
                </span>
              </div>
              <div className="Category-Element">
                <span className="Cartegory-tag">
                  <Link className="Category-link" to="/motherboard">
                    MOTHERBOARD
                  </Link>
                </span>
              </div>
              <div className="Category-Element">
                <span className="Category-tag">
                  <Link className="Category-link" to="/peripherals">
                    PERIFERICOS
                  </Link>
                </span>
              </div>
            </div>
            <div className="Category-drop">
              <ul className="List">
                <li>
                  <a>
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
                      <Link to="/videocards">PLACAS DE VIDEO</Link>
                    </li>
                    <li>
                      <Link to="/procesors">PROCESADORES</Link>
                    </li>
                    <li>
                      <Link to="/motherboard">MOTHERBOARD</Link>
                    </li>
                    <li>
                      <Link to="/peripherals">PERIFERICOS</Link>
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
                    <Link to="/motherboard">
                      <button>Explora</button>
                    </Link>
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
                    <Link to="/videocards">
                      <button>Ver Precios</button>
                    </Link>
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
                    <Link to="/procesors">
                      <button>Ver Más</button>
                    </Link>
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
                    <Link to="/peripherals">
                      <button>Ver más</button>
                    </Link>
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

            <ProductsView products={placasVideo} />

            <button className="Mas-Button">
              <Link to="/videocards">+ VER MÁS</Link>
            </button>
          </div>

          <div className="Trends-Container">
            <div className="Trends-Header">
              <h2 className="Trends-Title"> LAS TENDENCIAS EN PROCESADORES </h2>
            </div>

            <ProductsView products={procesador} />

            <button className="Mas-Button">
              <Link to="/procesors">+ VER MÁS</Link>
            </button>
          </div>

          <div className="Trends-Container">
            <div className="Trends-Header">
              <h2 className="Trends-Title"> LAS TENDENCIAS EN MOTHERS </h2>
            </div>

            <ProductsView products={mothers} />

            <button className="Mas-Button">
              <Link to="/motherboard">+ VER MÁS</Link>
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

            <ProductsView products={perifericos} />

            <button className="Mas-Button">
              <Link to="/peripherals">+ VER MÁS</Link>
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
