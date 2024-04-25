import { useEffect, useState } from "react";
import Logo from "../svg/logo.svg";
import PlacasJSON from "../mocks/VideoCards.json";
import ProceJSON from "../mocks/Procesors.json";
import MotherJSON from "../mocks/Motherboard.json";
import PeriJSON from "../mocks/Peripherals.json";
import SearchIcon from "../svg/busqueda";
import ModalBusqueda from "./modalBusqueda";
import { PayModal } from "./payModal";
import { useCart } from "../hooks/useCart";
import { useDarkMode } from "../context/DarkMode";
import { usePayModal } from "../context/Pay";
import ModalCarrito from "./modalCarrito";
import UserIcon from "../svg/usuario";
import ShoppingCart from "../svg/shopping-cart.svg";
import SolIcon from "../svg/sol";
import LunaIcon from "../svg/luna";
import HamburgerButton from "../components/hamburgerButton.jsx";

export function Header() {
  const [activo, setActivo] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isCartNotEmpty } = useCart();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { showPaymentModal, setShowPaymentModal } = usePayModal();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800 && activo) {
        //Verifica que el estado sea true y segun resolucion pasa el estado a false.
        setActivo(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activo]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      search(searchTerm);
    }
  };

  const ChangeModalPay = () => {
    setShowPaymentModal(!showPaymentModal);
  };

  const search = (term) => {
    const combinedData = [
      ...PlacasJSON.VideoCards,
      ...ProceJSON.Procesadores,
      ...MotherJSON.Motherboard,
      ...PeriJSON.perifericos,
    ];

    const results = combinedData.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.type.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase())
    );
    console.log(results);
    setSearchResults(results);
  };

  const handleSearchChange = (value) => {
    search(value);
  };

  const ChangeModal = () => {
    setShowModal(!showModal);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchChange(searchTerm);
      ChangeModal();
    }
  };

  const handleButtonClick = () => {
    handleSearchChange(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setSearchResults([]);
    }
  };

  const handleClick = () => {
    if (window.innerWidth <= 800) {
      setActivo(!activo);
    }
  };

  return (
    <header className="Navbar">
      <div className="Container">
        <div className="Logo-Container">
          <a href="/">
            <img
              src={Logo}
              alt="Componentes PC Logo"
              className="Logo"
              loading="lazy"
            />
          </a>
        </div>

        <div className="Search-Container">
          <input
            className="Search"
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="Search-Button"
            onClick={() => {
              handleSearch();
              ChangeModal();
              handleButtonClick();
            }}
          >
            <SearchIcon className="icon-search" />
          </button>
        </div>

        {showModal && (
          <ModalBusqueda results={searchResults} onClose={ChangeModal} />
        )}

        {showPaymentModal && <PayModal onClose={ChangeModalPay} />}

        {isCartOpen && <ModalCarrito onClose={toggleCart} />}

        <div className={`Buttons ${activo ? "active" : ""}`}>
          <div className="User-Button" onClick={handleClick}>
            <UserIcon color="white" className="user-icon" />
            {activo && <span className="NavBar-Text"> Perfil </span>}
          </div>

          <div
            className={`Cart-Button ${isCartNotEmpty ? "cart-not-empty" : ""}`}
            onClick={() => {
              toggleCart();
              handleClick();
            }}
          >
            <img
              src={ShoppingCart}
              alt="Componentes PC CartIcon"
              className="Cart"
              loading="lazy"
            />
            {activo && <span className="NavBar-Text"> Carrito </span>}
          </div>

          <div
            className="Button-Mode"
            onClick={() => {
              toggleDarkMode();
            }}
          >
            {isDarkMode ? (
              <>
                <SolIcon />
                {activo && <span className="NavBar-Text"> Modo Oscuro </span>}
              </>
            ) : (
              <>
                <LunaIcon />
                {activo && <span className="NavBar-Text"> Modo Claro </span>}
              </>
            )}
          </div>
        </div>

        <div className="burger">
          <HamburgerButton activo={activo} handleClick={handleClick} />
        </div>
        <div className={`initial ${activo ? "active" : ""}`}></div>
      </div>
    </header>
  );
}
