import { NavLink } from "react-router-dom";
import "./index.css";

const Categorias = () => {
  return (
    <div className="container-categorias">
      <h1>Categorias</h1>
      <ul>
        <div className="wraps">
          <li className="title-wrap">
            <NavLink to="/wraps">Wraps</NavLink>
          </li>
        </div>
        <li>
          <NavLink to="/ensaladas">Ensaladas</NavLink>
        </li>
        <li>
          <NavLink to="/sopas">Sopas</NavLink>
        </li>
        <li>
          <NavLink to="/postres">Postres</NavLink>
        </li>
        <li>
          <NavLink to="/bebidas">Bebidas</NavLink>
        </li>
      </ul>
    </div>
  );
};

export { Categorias };
