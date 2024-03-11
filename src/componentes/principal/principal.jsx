import "./principal.css";
import { Categorias } from "../categorias";

const Principal = () => {
  return (
    <div className="fondo-principal">
    <div>
      <div className="titulo">
        <img
          src="https://res.cloudinary.com/dtmziqubb/image/upload/v1709849712/Fuua_tittulo_tebxta.png"
          alt=""
        />
      </div>

      <div>
        <Categorias />
      </div>
    </div>
    </div>
  );
};

export { Principal };
