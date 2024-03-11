import { NavLink } from "react-router-dom";
import "./index.css";

const productos = [
  {
    img: "https://res.cloudinary.com/dtmziqubb/image/upload/v1710113196/Sin_t%C3%ADtulo-1_olkfz2.png",
    id: 4221945,
    name: "Wrap Personalizado",
    precio: 4900,
  },
  {
    img: "https://res.cloudinary.com/dtmziqubb/image/upload/v1710113196/Sin_t%C3%ADtulo-1_olkfz2.png",
    id: 4279783,
    name: "Wrap de Carne",
    precio: 4900,
  },
  {
    img: "https://res.cloudinary.com/dtmziqubb/image/upload/v1710113196/Sin_t%C3%ADtulo-1_olkfz2.png",
    id: 601000,
    name: "Wrap Cordobes",
    precio: 5400,
  },
];

const Wraps = () => {
  return (
    <div className="fondo">
      <div>
        <h1>Wraps</h1>
        <div className="caja">
          {productos.map((producto) => (
            <div className="box-w">
              <div className="imagen">
                <img src={producto.img} alt="" />
              </div>
              <div className="textos">
                <h1>{producto.name}</h1>
                <p>{producto.precio}</p>
              </div>
            </div>
          ))}
        </div>
        <NavLink to="/finalizar">Finalizar</NavLink>
      </div>
    </div>
  );
};

export { Wraps };
