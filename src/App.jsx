import Logo from "./svg/logo.svg";
import intel from "./img/Intel.webp";
import Placas from "./img/Placas.webp";
import gaming from "./img/gaming.webp";
import Razer from "./img/Razer.webp";
import ShoppingCart from "./svg/shopping-cart.svg";
import SolIcon from "./svg/sol.jsx";
import LunaIcon from "./svg/luna.jsx";
import "./App.css";
import "./index.css";
import SearchIcon from "./svg/busqueda.jsx";
import UserIcon from "./svg/usuario.jsx";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState(false);

  const toggleSearch = () => {
    setExpanded(!expanded);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
          <h1 className="Web-Title"> Componentes de PC </h1>
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
            <div> </div>
          </div>

          <div className="Trends-Container">
            <div className="Trends-Header">
              <h2 className="Trends-Title"> Todas las Tendencias </h2>
            </div>
            <div className="Trends-Body"></div>
          </div>

          <div>D</div>
          <div>E</div>
        </div>
        <footer className="Web-End"> Footer </footer>
      </div>
    </>
  );
}

export default App;
