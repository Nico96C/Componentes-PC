import "./videocards.css";
import "../App.css";
import VideoBanner from "../img/Category1/bannerVideo.jpg";
import PlacasVideo from "../mocks/VideoCards.json";
import { useFilters } from "../hooks/useFilters";
import { useId } from "react";

function VideoCards() {
  const { filters, setFilters, filterProducts } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const sortFilterId = useId();

  const filteredProducts = filterProducts(PlacasVideo.VideoCards);
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
    <div className="Placas-Main">
      <div className="Placas-Header">
        <div className="Placas-Navegation">HEADER</div>
      </div>
      <div className="Placas-Element-1">
        <div className="Element-1-ImgContainer">
          <img
            className="Element-1-IMG"
            src={VideoBanner}
            alt="VideoBannerIMG"
          />
        </div>
        <div className="Element-1-textContainer">
          <h1> PLACAS DE VIDEO </h1>
          <p>
            Con las tecnologias mas importantes! AMD y Nvidia para brindarte lo
            mejor en Gaming.
          </p>
        </div>
      </div>
      <div className="Placas-Search-Container">
        <div className="Search-headBar">
          <div className="Search-Order">
            <div>
              <span>FILTROS —</span>
            </div>

            <div>
              <label htmlFor={minPriceFilterId}> Precio mayor a: </label>
              <input
                type="range"
                id={minPriceFilterId}
                value={filters.minPrice}
                min="0"
                max="2000"
                onChange={handleChangeMinPrice}
              />
              <span> ${filters.minPrice} </span>
            </div>

            <div>
              <label htmlFor={categoryFilterId}>Categoria</label>
              <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all"> Todas </option>
                <option value="AMD"> AMD </option>
                <option value="Nvidia"> NVIDIA </option>
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
                  href={`/videocards/${product.id}`}
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
                          <h5> {product.chipset} </h5>
                        </div>
                        <span className="Product-Main-Price">{`$${product.price}`}</span>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="Web-End"> Footer </footer>
    </div>
  );
}

export default VideoCards;
