import React from "react";
import "./principal.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Principal = () => {
  return (
    <>
      <BrowserRouter>
        <div className="titulo">
          <img
            src="https://res.cloudinary.com/dtmziqubb/image/upload/v1709849712/Fuua_tittulo_tebxta.png"
            alt=""
          />
        </div>
        <div className="boton">
          <nav>
            <NavLink>Precio</NavLink>
          </nav>
        </div>
        <Routes>
          <Route path="inicio" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
      */A
    </>
  );
};

export { Principal };
