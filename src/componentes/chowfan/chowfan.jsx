import { NavLink } from "react-router-dom";
import "./chowfan.css";
const productos = [
  {
    img: "https://res.cloudinary.com/dtmziqubb/image/upload/v1710113196/Sin_t%C3%ADtulo-1_olkfz2.png",
    id: 4212312321945,
    name: "Wrap Personalizado",
    precio: 4900,
  },
  {
    img: "https://res.cloudinary.com/dtmziqubb/image/upload/v1710113196/Sin_t%C3%ADtulo-1_olkfz2.png",
    id: 4279123123783,
    name: "Wrap de Carne",
    precio: 4900,
  },
  {
    img: "https://res.cloudinary.com/dtmziqubb/image/upload/v1710113196/Sin_t%C3%ADtulo-1_olkfz2.png",
    id: 5001231230,
    name: "Wrap Cordobes",
    precio: 5400,
  },
];

const Chowfan = () => {
  return (
    <>
      <div className="headerProduct">
        <h1>Chow fan</h1>
      </div>
      <div className="container">
        {productos.map((producto) => (
          <div className=" boxProducts" key={producto.id}>
            <div className="imagen"></div>
            <div className="item">
              <div className="itemName">
                <h4>{producto.name}</h4>
                <p>${producto.precio}</p>
              </div>
              <div className="mas">
                <button className="plus">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NavLink to="/finalizar">Finalizar</NavLink>
    </>
  );
};

export { Chowfan };
