/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams } from "react-router-dom";
import "../videocards.css";
import JSON from "../../mocks/VideoCards.json";
import { useDarkMode } from "../../context/DarkMode";
import SolIcon from "../../svg/sol.jsx";
import LunaIcon from "../../svg/luna.jsx";
import Logo from "../../svg/logo.svg"

const productoPlaca = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  const idBuscado = parseInt(id);

  const searchImg = (id) => {
    const productoEncontrado = JSON.VideoCards.find(producto => producto.id === id);
    return productoEncontrado || null;
  };

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="Placas-Product-Main">
      <div className="Placas-Header">
        <div className="Placas-Navegation">
          <div className="navegation">
            <button className="home-button">
              <Link to="/">Home {">"}</Link>
            </button>
            <button className="home-button">
              <Link to="/videocards">Placas de Video</Link>
            </button>
          </div>
          
          <div>
            <a href="/">
              <img src={Logo} alt="Componentes PC Logo" className="Logo" />
            </a>
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
              </>
            ) : (
              <>
                <LunaIcon />
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        <img src={searchImg(idBuscado).thumbnail} width={200} height={150}/>
      </div>
    </div>
  );
};

export default productoPlaca;
