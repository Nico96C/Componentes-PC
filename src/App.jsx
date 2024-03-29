import Logo from "./svg/logo.svg";
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
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
