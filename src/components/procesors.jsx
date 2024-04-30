import "./videocards.css";
import "../App.css";
import "./procesors.css";
import ProceBanner from "../img/Category2/BannerProce.jpg";
import Procesors from "../mocks/Procesors.json";
import { useFilters } from "../hooks/useFilters";
import { useId } from "react";
import { useDarkMode } from "../context/DarkMode";
import { Link } from "react-router-dom";
import "../index.css";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";

function Procesor() {
  const { filters, setFilters, filterProducts } = useFilters();
  const { isDarkMode } = useDarkMode();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const sortFilterId = useId();

  const filteredProducts = filterProducts(Procesors.Procesadores);
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
          <Link to="/procesors">Procesadores</Link>
        </button>
      </div>

      <div className="Placas-Element-1">
        <div className="Element-1-ImgContainer">
          <img
            className="Element-1-IMG"
            src={ProceBanner}
            alt="ProceBannerIMG"
          />
        </div>
        <div className="Element-1-textContainer">
          <h1> MICROPROCESADORES </h1>
          <p>
            Mayor potencia en procesamiento, AMD e Intel en el catalogo para tu
            experiencia de juego.
          </p>
        </div>
      </div>
      <div className="Placas-Search-Container">
        <div className="Search-headBar">
          <div className="Search-Order">
            <div className="Filter-color">
              <span>FILTROS</span>
            </div>

            <div className="Filter-color">
              <label className="Filter-1" htmlFor={minPriceFilterId}>
                {" "}
                Un precio superior a [${filters.minPrice}]{" "}
              </label>
              <input
                type="range"
                id={minPriceFilterId}
                value={filters.minPrice}
                min="0"
                max="500"
                onChange={handleChangeMinPrice}
              />
            </div>

            <div className="Filter-color">
              <label htmlFor={categoryFilterId}>Categoria:</label>
              <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all"> Todas </option>
                <option value="AMD"> AMD </option>
                <option value="INTEL"> INTEL </option>
              </select>
            </div>

            <div className="Filter-color">
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
                  href={`/procesors/${product.id}`}
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
                        <div className="Product-Stock">
                          <div className="Product-tags">
                            <div
                              className={
                                product.stock
                                  ? "Product-cardtag"
                                  : "Product-cardtag-none"
                              }
                            >
                              <p>{`${
                                product.stock ? "En Stock" : "Sin Stock"
                              }`}</p>
                            </div>
                          </div>
                        </div>
                        <div className="Product-Main-Info">
                          <h3> {product.name} </h3>
                          <h5> {product.core_count} Nucleos </h5>
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

export default Procesor;
