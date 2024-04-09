/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./modalBusqueda.css";

function ModalBusqueda({ results, onClose }) {
  useEffect(() => {
    // Agregar la clase 'modal-open' al cuerpo del documento cuando la modal está abierta
    document.body.classList.add("modal-open");

    // Remover la clase 'modal-open' del cuerpo del documento cuando la modal se cierra
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  // Función para cerrar la modal cuando se hace clic fuera de ella
  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          CLOSE
        </button>
        <div className="modal-Coincidence">
          <div className="modal-items">
            {results.map((item) => (
              <div className="modal-item" key={item.id}>
                <div className="modal-img">
                  <img
                    src={item.thumbnail}
                    style={{ width: "200px", height: "90px" }}
                  />
                </div>
                <div className="modal-info">
                  <div className="modal-item-name"> {item.name} </div>
                  <div className="modal-item-price"> {`$${item.price}`} </div>
                </div>

                <div className="modal-path">

                    <a
                      href={
                        item.type === "Placa de Video"
                          ? `/videocards/${item.id}`
                          : `/procesors/${item.id}`
                      }
                      className="modal-item-link"
                    >
                      INFO
                    </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBusqueda;
