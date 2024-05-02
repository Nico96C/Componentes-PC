import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import VideoCards from "./components/videocards";
import ProductoPlaca from "./components/productos/ProductoPlaca";
import Procesors from "./components/procesors";
import ProductoProce from "./components/productos/ProductoProce";
import MotherBoard from "./components/motherboard";
import ProductoMother from "./components/productos/ProductoMother";
import Peripheral from "./components/peripherals";
import ProductoPeri from "./components/productos/ProductoPeri";
import ScrollToTop from "./components/ScrollTop";

import "./index.css";
import { CartProvider } from "./context/Cart";
import { FiltersProviders } from "./context/filters";
import { DarkModeProvider } from "./context/DarkMode";
import { PayModalProvider } from "./context/Pay";
import { LoginProvider } from "./context/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <FiltersProviders>
        <DarkModeProvider>
          <PayModalProvider>
            <LoginProvider>
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/videocards" element={<VideoCards />} />
                  <Route path="/videocards/:id" element={<ProductoPlaca />} />
                  <Route path="/procesors" element={<Procesors />} />
                  <Route path="/procesors/:id" element={<ProductoProce />} />
                  <Route path="/motherboard" element={<MotherBoard />} />
                  <Route path="/motherboard/:id" element={<ProductoMother />} />
                  <Route path="/peripherals" element={<Peripheral />} />
                  <Route path="/peripherals/:id" element={<ProductoPeri />} />
                </Routes>
              </BrowserRouter>
            </LoginProvider>
          </PayModalProvider>
        </DarkModeProvider>
      </FiltersProviders>
    </CartProvider>
  </React.StrictMode>
);
