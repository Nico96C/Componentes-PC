/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./UserLogin.css";
import { useDarkMode } from "../context/DarkMode";

export function UserLogin({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isDarkMode } = useDarkMode();
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Admin" && password === "12345") {
      alert("¡Inicio de sesión exitoso!");
      localStorage.setItem("isLogin", "true");
      setIsLogin(true);
      onClose();
    } else {
      setError(
        "Login incorrecto. Por favor, inténtalo de nuevo."
      );
    }
  };

  const handleLogout = () => {
    localStorage.setItem("isLogin", "false");
    setIsLogin(false);
  };

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const modeClassName = isDarkMode ? "dark-mode" : "light-mode";

  return (
    <>
      <div className="Login-Background" onClick={handleCloseModal}></div>
      <div className={`Login-view ${modeClassName}`}>
        {isLogin ? (
          <>
            <h3>Bienvenido, Admin</h3>
            <button className="Button-OFF" onClick={handleLogout}>Cerrar Sesión</button>
          </>
        ) : (
          <>
            <h3>Inicio Sesión</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Usuario</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className="Button-ON" type="submit">Iniciar Sesión</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </>
        )}
      </div>
    </>
  );
}
