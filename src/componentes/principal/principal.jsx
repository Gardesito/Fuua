import "./principal.css";
import { Categorias } from "../categorias";
import { Hero } from "../hero/hero";
import { Productos } from "../categorias/productos/productos";
const Principal = () => {
  return (
    <div className="header">
      <div>
        <div className="container-header">
          <div className="imgHeader">
            <img
              src="https://res.cloudinary.com/dtmziqubb/image/upload/v1709849712/Fuua_tittulo_tebxta.png"
              alt=""
            />
          </div>
          <div>
            <input type="text" placeholder="Que quieres comer...?" />
          </div>
        </div>

        <div>
          <Hero />
          <Productos />
          <Categorias />
        </div>
      </div>
    </div>
  );
};

export { Principal };
