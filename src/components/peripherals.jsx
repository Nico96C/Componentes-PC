import "./videocards.css";
import "../App.css";
import "./procesors.css";
import PeriBanner from "../img/BannerRazer.jpg";
import Peripherals from "../mocks/Peripherals.json";
import { useFilters } from "../hooks/useFilters";
import { useId } from "react";
import { useDarkMode } from "../context/DarkMode";
import { Link } from "react-router-dom";
import "../index.css";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";

function Peripheral() {
  const { filters, setFilters, filterProducts } = useFilters();
  const { isDarkMode } = useDarkMode();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const sortFilterId = useId();

  const filteredProducts = filterProducts(Peripherals.perifericos);
  /*
  <div className="Search-PanelFilter"></div>
  */
  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const handleSortChange = (event) => {
    const newSort = event.target.value;
    setFilters({ ...filters, sort: newSort });
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Header />
      <div className="navegation-2">
        <button className="home-button">
          <Link to="/">Home {">"}</Link>
        </button>
        <button className="home-button">
          <Link to="/peripherals">Perifericos</Link>
        </button>
      </div>

      <div className="Placas-Element-1">
        <div className="Element-1-ImgContainer">
          <img className="Element-1-IMG" src={PeriBanner} alt="PeriBannerIMG" />
        </div>
        <div className="Element-1-textContainer">
          <h1> PERIFERICOS </h1>
          <p>
            Perifericos superiores! con comodidad y calidad, Razer sera tu mejor
            aliado!
          </p>
        </div>
      </div>
      <div className="Placas-Search-Container">
        <div className="Search-headBar">
          <div className="Search-Order">
            <div>
              <span>FILTROS:</span>
            </div>

            <div>
              <label htmlFor={minPriceFilterId}>
                {" "}
                Un precio superior a [${filters.minPrice}]{" "}
              </label>
              <input
                type="range"
                id={minPriceFilterId}
                value={filters.minPrice}
                min="0"
                max="200"
                onChange={handleChangeMinPrice}
              />
            </div>

            <div>
              <label htmlFor={categoryFilterId}>Categoria:</label>
              <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all"> Todas </option>
                <option value="Mouse"> MOUSE </option>
                <option value="Auricular"> AURICULAR </option>
                <option value="Teclado"> TECLADO </option>
              </select>
            </div>

            <div>
              <label htmlFor={sortFilterId}>Ordenar por precio:</label>
              <select
                id={sortFilterId}
                value={filters.sort}
                onChange={handleSortChange}
              >
                <option value="default">Por defecto</option>
                <option value="lowToHigh">Menor a Mayor</option>
                <option value="highToLow">Mayor a Menor</option>
              </select>
            </div>
          </div>
        </div>

        <div className="Search-Items-Container">
          <div className="Search-Items-Render">
            <div className="Search-Item-Head"></div>
            <div className="Search-Item-Card">
              {filteredProducts.map((product) => (
                <a
                  className="Trends-Item"
                  key={product.id}
                  href={`/peripherals/${product.id}`}
                >
                  <article className="Trends-MainContainer">
                    <div className="Trends-SubContainer">
                      <div className="Trends-ImgContainer">
                        <img
                          className="Trends-Product-Img"
                          src={product.thumbnail}
                          alt={product.name}
                        />
                      </div>
                      <div className="Trends-Product-Info">
                        <div className="Product-Stock"></div>
                        <div className="Product-Main-Info">
                          <h3> {product.name} </h3>
                          <h5> {product.type} </h5>
                        </div>
                        <span className="Product-Main-Price">{`$${product.price}`}</span>
                      </div>
                      <div className="Trends-Product-Buy">
                        <button className="Buy-Button">Ver Info</button>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Peripheral;
