import { Link, useParams } from "react-router-dom";
import JSON from "../../mocks/VideoCards.json";

const productoPlaca = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  const idBuscado = parseInt(id);

  const searchImg = (id) => {
    const productoEncontrado = JSON.VideoCards.find(producto => producto.id === id);
    return productoEncontrado || null;
  };

  return (
    <div className="Placas-Product-Main">
      <button>
        <Link to="/">GO BACK</Link>
      </button>
      <div>
        <img src={searchImg(idBuscado).thumbnail} />
      </div>
      <h2> Producto 1 </h2>
    </div>
  );
};

export default productoPlaca;
