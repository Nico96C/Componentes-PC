import Logo from "./svg/logo.svg";
import "./App.css";
import SearchIcon from "./svg/busqueda.jsx";
import UserIcon from "./svg/usuario.jsx";

function App() {
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

            <div className="Search-Background">
              <div className="Search-Container">
                <input
                  className="Search"
                  type="search"
                  placeholder="Buscar Componentes..."
                />
                <button className="Search-Button">
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
