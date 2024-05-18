import { NavLink } from "react-router-dom";
import "./postres.css";

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

const Postres = () => {
  return (
    <>
      <div className="headerProduct">
        <h1>Postres</h1>
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

export { Postres };
