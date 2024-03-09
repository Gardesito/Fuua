import { NavLink } from "react-router-dom";

const Categorias = () => {
  return (
    <div>
      <h1>Categorias</h1>
      <ul>
        <li>
          <NavLink to="/wraps">Wraps</NavLink>
        </li>
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
