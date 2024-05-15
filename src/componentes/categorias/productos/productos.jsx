import React from "react";
import "./productos.css";
const Productos = () => {
  return (
    <>
      <h1 className="titleCategorias"> Categorias</h1>
      <div className="categorias">
        <ul className="circle-container">
          <li className="circle1">
            <img
              src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715813075/wrap_etmnnk.png"
              alt=""
            />
          </li>
          <li className="circle2">
            <img
              src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715813074/salad_2515150_xgtchy.png"
              alt=""
            />
          </li>
          <li className="circle3">
            <img
              src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715813074/burguer_eviezm.png"
              alt=""
            />
          </li>
          <li className="circle4">
            <img
              src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715813074/cake_frupql.png"
              alt=""
            />
          </li>
          <li className="circle5">
            <img
              src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715813459/chow_riefxv.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export { Productos };
