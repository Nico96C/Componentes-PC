import { Link } from "react-router-dom";
import Logo from "./svg/logo.svg";
import intel from "./img/Intel.webp";
import Placas from "./img/Placas.webp";
import gaming from "./img/gaming.webp";
import Razer from "./img/Razer.webp";
import Graficas from "./img/Category1/mejores-graficas.webp";
import Procesador from "./img/Category2/mejores-proce.jpg";
import Perifericos from "./img/Category3/razer-perifericos.jpg";
import SillasGamer from "./img/Category4/sillas-gamer.png";
import ShoppingCart from "./svg/shopping-cart.svg";
import SolIcon from "./svg/sol.jsx";
import LunaIcon from "./svg/luna.jsx";
import PlacasJSON from "./mocks/VideoCards.json";
import ProceJSON from "./mocks/Procesors.json";
import "./App.css";
import "./index.css";
import SearchIcon from "./svg/busqueda.jsx";
import UserIcon from "./svg/usuario.jsx";
import { useEffect, useState } from "react";

function App() {
  const [expanded, setExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [products, setProducts] = useState([]);
  const [procesador, setProcesador] = useState([]);

  const toggleSearch = () => {
    setExpanded(!expanded);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Filtrar los productos con 'oferta: true'
    const AllVideo = PlacasJSON.VideoCards;
    const AllProcesador = ProceJSON.Procesadores;
    // Establecer los productos filtrados en el estado
    setProcesador(AllProcesador)
    setProducts(AllVideo);
  }, []);

  return (
    <>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <header className="Navbar">
          <div className="Container">
            <div className="Logo-Container">
              <img src={Logo} alt="Componentes PC Logo" className="Logo" />
            </div>

            <div className="User-Button">
              <UserIcon color="white" className="user-icon" />
            </div>

            <div className={`Search-Background ${expanded ? "expanded" : ""}`}>
              <div className="Search-Container">
                <input
                  className="Search"
                  type="search"
                  placeholder="Busqueda..."
                />
                <button className="Search-Button" onClick={toggleSearch}>
                  <SearchIcon className="icon-search" />
                </button>
              </div>
            </div>

            <div className="Cart-Button">
              <img
                src={ShoppingCart}
                alt="Componentes PC CartIcon"
                className="Cart"
              />
            </div>

            <button className="Button-Mode" onClick={toggleDarkMode}>
              {isDarkMode ? <SolIcon /> : <LunaIcon />}
            </button>
          </div>
        </header>

        <nav className="All-Categories">
          <div className="Categories-Container">
            <button direction="left" className="Displace__Content"></button>
            <div className="Categories">
              <div className="Category-Element">
                <span> VideoCard </span>
              </div>
              <div className="Category-Element">
                <span> Procesadores </span>
              </div>
              <div className="Category-Element">
                <span> Motherboard </span>
              </div>
              <div className="Category-Element">
                <span> Mouse </span>
              </div>
            </div>
            <button direction="right" className="Displace__Content"></button>
          </div>
        </nav>

        <div className="Web-Container">
          <h1 className={isDarkMode ? "Web-Title-2" : "Web-Title"}>
            {" "}
            Componentes de PC{" "}
          </h1>
          <div className="Carrousel-Seccion">
            <div className="flechaL"></div>
            <div className="Carrousel-Item">
              <section className="Carrousel-ImageContainer">
                <div className="Carrousel-ImageWrapper">
                  <img
                    src={intel}
                    alt="Intel-Image"
                    className="Image-Corrousel"
                  />
                  <div className="Carrousel-Text">
                    <h1>¡Marca Lider! Intel esta con nosotros</h1>
                    <button>Explora</button>
                  </div>
                </div>
                <div className="Carrousel-ImageWrapper">
                  <img
                    src={Placas}
                    alt="Placas-Video-Image"
                    className="Image-Corrousel"
                  />
                  <div className="Carrousel-Text">
                    <h1>Mejores Placas de Video!</h1>
                    <button>Ver Precios</button>
                  </div>
                </div>
                <div className="Carrousel-ImageWrapper">
                  <img
                    src={gaming}
                    alt="PC-Gamer-Image"
                    className="Image-Corrousel"
                  />
                  <div className="Carrousel-Text">
                    <h1>Armado Completo de PC Gamer</h1>
                    <button>Empezar</button>
                  </div>
                </div>
                <div className="Carrousel-ImageWrapper">
                  <img
                    src={Razer}
                    alt="Razer-Image"
                    className="Image-Corrousel"
                  />
                  <div className="Carrousel-Text">
                    <h1>Razer! Todo para Gamers</h1>
                    <button>Ver más</button>
                  </div>
                </div>
              </section>
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
                      />
                      <div className="overlay">
                        <p className="text-menu">
                          {" "}
                          LAS MEJORES PLACAS DE VIDEO CON HASTA ¡12 CUOTAS SIN
                          INTERES!{" "}
                        </p>
                      </div>
                    </span>
                  </div>
                  <div className="Featured-Contain">
                    <span>
                      <img
                        className="Featured-Img-Video"
                        src={Procesador}
                        alt="CPU's"
                        width="100%"
                      />
                      <div className="overlay">
                        <p className="text-menu">
                          {" "}
                          LO MEJOR DE INTEL Y SUS ULTIMAS GENERACIONES CON EL
                          MEJOR PRECIO{" "}
                        </p>
                      </div>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="Featured-Links">
                <Link className="videocards-link" to="/videocards">
                  <div className="Featured-Contain">
                    <span>
                      <img
                        className="Featured-Img-Video"
                        src={Perifericos}
                        alt="Razer"
                        width="105%"
                      />
                      <div className="overlay">
                        <p className="text-menu">
                          {" "}
                          RAZER, PRECIO Y CALIDAD DE INCREIBLES PERIFERICOS!
                          AHORA EN 12 CUOTAS FIJAS{" "}
                        </p>
                      </div>
                    </span>
                  </div>
                  <div className="Featured-Contain">
                    <span>
                      <img
                        className="Featured-Img-Video"
                        src={SillasGamer}
                        alt="Gamer Chairs"
                        width="113%"
                      />
                      <div className="overlay">
                        <p className="text-menu">
                          {" "}
                          VARIEDAD DE SILLAS GAMERS, CON LA MEJOR COMODIDAD PARA
                          JUGAR!{" "}
                        </p>
                      </div>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="Trends-Container">
            <div className="Trends-Header">
              <h2 className="Trends-Title"> TODAS LAS TENDENCIAS </h2>
            </div>
            <div className="Trends-Body">
              <div className="Trends-Items">
                {products.map((product) => (
                  <a
                    className="Trends-Item"
                    key={product.id}
                    href={`/videocards/${product.id}`}
                  >
                    <article className="Trends-MainContainer">
                      <div className="Trends-SubContainer">
                        <div className="Trends-ImgContainer">
                          <img className="Trends-Product-Img" src={product.thumbnail} alt={product.name} />
                        </div>
                        <div className="Trends-Product-Info">
                          <div className="Product-Stock"></div>
                          <div className="Product-Main-Info">
                            <h3> {product.name} </h3>
                          </div>
                          <span className="Product-Main-Price"> $999 </span>
                        </div>
                        <div className="Trends-Product-Buy">
                          <button className="Buy-Button"> Comprar Ahora </button>
                        </div>
                        <div className="Trends-Product-AddCart"></div>
                      </div>
                    </article>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="Trends-Container">
            <div className="Trends-Header">
              <h2 className="Trends-Title"> TODAS LAS TENDENCIAS </h2>
            </div>
            <div className="Trends-Body">
              <div className="Trends-Items">
                {procesador.map((proce) => (
                  <a
                    className="Trends-Item"
                    key={proce.id}
                    href={`/procesors/${proce.id}`}
                  >
                    <article className="Trends-MainContainer">
                      <div className="Trends-SubContainer">
                        <div className="Trends-ImgContainer">
                          <img className="Trends-Product-Img" src={proce.thumbnail} alt={proce.name} />
                        </div>
                        <div className="Trends-Product-Info">
                          <div className="Product-Stock"></div>
                          <div className="Product-Main-Info">
                            <h3> {proce.name} </h3>
                          </div>
                          <span className="Product-Main-Price"> $999 </span>
                        </div>
                        <div className="Trends-Product-Buy">
                          <button className="Buy-Button"> Comprar Ahora </button>
                        </div>
                        <div className="Trends-Product-AddCart"></div>
                      </div>
                    </article>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>E</div>
        </div>
        <footer className="Web-End"> Footer </footer>
      </div>
    </>
  );
}

export default App;
