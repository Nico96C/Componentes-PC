/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./modalBusqueda.css";
import ErrorBusqueda from "../img/ErrorResults.png";
import { useDarkMode } from "../context/DarkMode";

function ModalBusqueda({ results, onClose }) {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  // Función para cerrar la modal cuando se hace clic afuera.
  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modeClassName = isDarkMode ? "dark-mode" : "light-mode";

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className={`modal ${modeClassName}`}>
        <button className="close-btn" onClick={onClose}>
          CLOSE
        </button>
        <div className="results-banner">
          <p>Resultados: {results.length}</p>
        </div>
        <div className="modal-Coincidence">
          {results.length > 0 ? (
            <div className={`modal-items ${modeClassName}`}>
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
                          : item.type === "Procesador"
                          ? `/procesors/${item.id}`
                          : item.type === "Motherboard"
                          ? `/motherboards/${item.id}`
                          : item.type === "Periferico"
                          ? `/peripherals/${item.id}`
                          : "#"
                      }
                      className="modal-item-link"
                    >
                      INFO
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`modal-items ${modeClassName}`}>
              <div
                className="error-container"
                style={{ backgroundImage: `url(${ErrorBusqueda})` }}
              >
                <p>¡RESULTADOS NO ENCONTRADOS!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalBusqueda;
