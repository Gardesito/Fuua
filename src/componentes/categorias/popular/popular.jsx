import React from "react";
import "./popular.css";


const Popular = () => {
  return (
    <>
      <div>
        <h1>Populares</h1>

        <div class="container">
          <div class="art-board">
            <div class="art-board__container">
              <div class="card">
                <div class="card__image">
                  <img
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1710192488/IMG_0981_r5qkxz.jpg"
                    alt="Salad"
                  />
                </div>
                <div class="card__info">
                  <div class="car__info--title">
                    <h3>Wrap</h3>
                    <p>Wrap de Carne</p>
                  </div>
                  <div class="card__info--price">
                    <p>$ 5</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__image">
                  <img
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1710180494/IMG_0686_1_i4yiw2.jpg"
                    alt="Fish"
                  />
                </div>
                <div class="card__info">
                  <div class="car__info--title">
                    <h3>Ensalada</h3>
                    <p>Ensalada Completa</p>
                  </div>
                  <div class="card__info--price">
                    <p>$ 5</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__image">
                  <img
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1715961892/DSC_0504_1_cnwlsl.jpg"
                    alt="Pizza"
                  />
                </div>
                <div class="card__info">
                  <div class="car__info--title">
                    <h3>Burguer</h3>
                    <p>burguer clasica</p>
                  </div>
                  <div class="card__info--price">
                    <p>$ 5</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__image">
                  <img
                    src="https://images.pexels.com/photos/792028/pexels-photo-792028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Sushi"
                  />
                </div>
                <div class="card__info">
                  <div class="car__info--title">
                    <h3>Sushi</h3>
                    <p>Fresh & sweet</p>
                  </div>
                  <div class="card__info--price">
                    <p>$ 5</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__image">
                  <img
                    src="https://images.pexels.com/photos/907142/pexels-photo-907142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Dessert"
                  />
                </div>
                <div class="card__info">
                  <div class="car__info--title">
                    <h3>Dessert</h3>
                    <p>Fresh & sweet</p>
                  </div>
                  <div class="card__info--price">
                    <p>$ 5</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Popular };
