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
            <NavLink to="/ensaladas">
              <h2>Ensaladas</h2>
            </NavLink>
          </li>
        </div>
        <div className="burger">
          <li>
            <NavLink to="/burger">
              <h2>Burger</h2>
            </NavLink>
          </li>
        </div>
        <div className=" postres">
          <li>
            <NavLink to="/postres">
              <h2>Postres</h2>
            </NavLink>
          </li>
        </div>
        <div className="bebidas">
          <li>
            <NavLink to="/bebidas">
              <h2>Bebidas</h2>
            </NavLink>
          </li>
        </div>
      </ul>
    
    </div>

    
  );
};

export { Categorias };
