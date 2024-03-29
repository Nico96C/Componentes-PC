import Logo from "./svg/logo.svg";
import ShoppingCart from "./svg/shopping-cart.svg"
import "./App.css";
import SearchIcon from "./svg/busqueda.jsx";
import UserIcon from "./svg/usuario.jsx";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState(false);

  const toggleSearch = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div>
        <header className="Navbar">
          <div className="Container">
            <div className="Logo-Container">
              <img src={Logo} alt="Componentes PC Logo" className="Logo" />
            </div>

            <div className="User-Button">
              <UserIcon color="white" className="user-icon" />
            </div>

            <div className={`Search-Background ${expanded ? 'expanded' : ''}`}>
              <div className="Search-Container">
                <input
                  className="Search"
                  type="search"
                  placeholder="Buscar Componentes..."
                />
                <button className="Search-Button" onClick={toggleSearch}>
                  <SearchIcon className="icon-search" />
                </button>
              </div>
            </div>

            <div className="Cart-Button">
              <img src={ShoppingCart} alt="Componentes PC CartIcon" className="Cart" />
            </div>
          </div>
        </header>

        <nav className="All-Categories">
          <div className="Categories-Container">
              <button direction="left" className="Displace__Content"></button>
              <div>
                <div className="Category-Element">
                  <span> Video Card </span>
                </div>
                <div className="Category-Element">
                  <span> CPU </span>
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
        
        <div className="Web-Container"> WEB </div>
        <footer className="Web-End"> END </footer>
      </div>
    </>
  );
}

export default App;
