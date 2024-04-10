import "./videocards.css";
import "../App.css";
import VideoBanner from "../img/Category1/bannerVideo.jpg";
import PlacasVideo from "../mocks/VideoCards.json";

function VideoCards() {
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
            <span>DESTACADO</span>
          </div>
        </div>

        <div className="Search-PanelFilter"></div>
        <div className="Search-Items-Container">
          <div className="Search-Items-Render">
            <div className="Search-Item-Head"></div>
            <div className="Search-Item-Card">
              {PlacasVideo.VideoCards.map((product) => (
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
    </div>
  );
}

export default VideoCards;
