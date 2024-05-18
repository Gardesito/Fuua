import "./productos.css";
import { NavLink } from "react-router-dom";

const Productos = () => {
  return (
    <>
      <h1 className="titleCategorias"> Categorias</h1>
      <div className="categorias">
        <ul className="circle-container">
          <li className="circle1">
            <NavLink to="/wraps">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715813075/wrap_etmnnk.png"
                alt=""
              />
            </NavLink>
          </li>
          <li className="circle2">
            <NavLink to="/ensaladas">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715813074/salad_2515150_xgtchy.png"
                alt=""
              />
            </NavLink>
          </li>
          <li className="circle3">
            <NavLink to="/burguer">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715813074/burguer_eviezm.png"
                alt=""
              />
            </NavLink>
          </li>
          <li className="circle4">
            <NavLink to="/postres">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715813074/cake_frupql.png"
                alt=""
              />
            </NavLink>
          </li>
          <li className="circle5">
            <NavLink to="/chowfan">
              <img
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715813459/chow_riefxv.png"
                alt=""
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export { Productos };
