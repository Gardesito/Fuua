import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="heroTitle">
          Oferta del dia <br /> con el 50% de <br /> descuento.{" "}
          <div className="heroBtn">
            {" "}
            <button>Pedir</button>
          </div>
        </div>

        <div className="heroImg">
          <img
            src="https://res.cloudinary.com/dtmziqubb/image/upload/c_thumb,w_200,g_face/v1710113196/Sin_t%C3%ADtulo-1_olkfz2.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export { Hero };
