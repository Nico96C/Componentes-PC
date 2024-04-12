import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import VideoCards from "./components/videocards";
import ProductoPlaca from "./components/productos/ProductoPlaca";
import Procesors from "./components/procesors";
import ProductoProce from "./components/productos/ProductoProce";
import "./index.css";
import { CartProvider } from "./context/Cart";
import { FiltersProviders } from "./context/filters";
import { DarkModeProvider } from "./context/DarkMode";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <FiltersProviders>
        <DarkModeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/videocards" element={<VideoCards />} />
              <Route path="/videocards/:id" element={<ProductoPlaca />} />
              <Route path="/procesors" element={<Procesors />} />
              <Route path="/procesors/:id" element={<ProductoProce />} />
            </Routes>
          </BrowserRouter>
        </DarkModeProvider>
      </FiltersProviders>
    </CartProvider>
  </React.StrictMode>
);
