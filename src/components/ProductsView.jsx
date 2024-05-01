/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function getProductLink(product) {
  switch (product.type) {
    case "Procesador":
      return `/procesors/${product.id}`;
    case "Placa de Video":
      return `/videocards/${product.id}`;
    case "Mother":
      return `/motherboard/${product.id}`;
    case "Periferico":
      return `/peripherals/${product.id}`;
    default:
      return "/";
  }
}

export function ProductsView({ products }) {
  const { addToCart } = useCart();

  return (
    <div className="Trends-Body">
      <div className="Trends-Items">
        {products.slice(0, 5).map((product) => (
          <div className="Trends-Item" key={product.id}>
            <article className="Trends-MainContainer">
              <div className="Trends-SubContainer">
                <Link
                  className="Trends-ImgContainer"
                  href={getProductLink(product)}
                >
                  <img
                    className="Trends-Product-Img"
                    src={product.thumbnail}
                    alt={product.name}
                    loading="lazy"
                  />
                </Link>
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
                        <p>{`${product.stock ? "En Stock" : "Sin Stock"}`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="Product-Main-Info">
                    {product.type === "Placa de Video" && (
                      <h5>{product.chipset}</h5>
                    )}
                    <h4> {product.name} </h4>
                  </div>
                  <span className="Product-Main-Price">{`$${product.price}`}</span>
                </div>
              </div>
            </article>
            <div className="Trends-Product-Buy">
              {product.stock ? (
                <button
                  className="Buy-Button"
                  onClick={() => addToCart(product, 1)}
                >
                  Añadir al Carrito
                </button>
              ) : (
                <button
                  className="Buy-Button"
                >
                  No Disponible
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
