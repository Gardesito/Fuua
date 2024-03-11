import { NavLink } from "react-router-dom";
import "./index.css";

const Categorias = () => {
  return (
    <div className="container-categorias">
      {/*       <h1>Categorias</h1>
       */}{" "}
      <ul>
        <div className="wraps">
          <li className="title-wrap">
            <NavLink to="/wraps">
              <h2>Wraps</h2>
            </NavLink>
          </li>
        </div>

        <div className="ensaladas">
          <li>
            <NavLink to="/ensaladas">Ensaladas</NavLink>
          </li>
        </div>
        <div>
          <li>
            <NavLink to="/burger">Burger</NavLink>
          </li>
        </div>
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
