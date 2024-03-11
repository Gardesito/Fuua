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
        <div className="burger">
          <li>
            <NavLink to="/burger">Burger</NavLink>
          </li>
        </div>
        <div className=" postres">
          <li>
            <NavLink to="/postres">Postres</NavLink>
          </li>
        </div>
        <div className="bebidas">
          <li>
            <NavLink to="/bebidas">Bebidas</NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export { Categorias };
