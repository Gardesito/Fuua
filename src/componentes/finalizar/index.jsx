import "./finalizar.css";

const Finalizar = () => {
  const hacerPedido = () => {
    console.log("pedido enviado");
  };

  return (
    

<div class="container">
      <div class="item2">
        <img
          src="https://res.cloudinary.com/dtmziqubb/image/upload/v1710192488/IMG_0981_r5qkxz.jpg"
          alt=""
        />
      </div>
{/*       <!-- -------------------------------------------- -->
 */}      <div class="info">
        <h2>Wrap de Carne</h2>
        <div class="carne">
          <h3>Carne</h3>
{/*           <!-- ---------------- -->
 */}          <div class="po">
            <label class="container1">
              <input class="box" type="checkbox" />
              <div class="checkmark">
                <p class="No name">Pollo</p>

                <p class="Yes name">Pollo</p>
              </div>
            </label>
            <label class="container1">
              <input class="box" type="checkbox" />
              <div class="checkmark">
                <p class="No name">Pulpa de Cerdo</p>

                <p class="Yes name">Pulpa de Cerdo</p>
              </div>
            </label>
            <label class="container1">
              <input class="box" type="checkbox" />
              <div class="checkmark">
                <p class="No name">Bola de Lomo</p>

                <p class="Yes name">Bola de Lomo</p>
              </div>
            </label>
          </div>
{/*           <!-- ----------- -->
 */}        </div>
        <div class="salsa">
          <h3>Salsas de la Casa :</h3>
          <div class="po">
            <label class="container1">
              <input class="box" type="checkbox" />
              <div class="checkmark">
                <p class="No name">Ajo</p>

                <p class="Yes name">Ajo</p>
              </div>
            </label>
            <label class="container1">
              <input class="box" type="checkbox" />
              <div class="checkmark">
                <p class="No name">Albahaca</p>

                <p class="Yes name">Albahaca</p>
              </div>
            </label>
            <label class="container1">
              <input class="box" type="checkbox" />
              <div class="checkmark">
                <p class="No name">Fuua</p>

                <p class="Yes name">Fuua</p>
              </div>
            </label>
            <label class="container1">
              <input class="box" type="checkbox" />
              <div class="checkmark">
                <p class="No name">Mayonesa</p>

                <p class="Yes name">Mayonesa</p>
              </div>
              <label class="container1">
                <input class="box" type="checkbox" />
                <div class="checkmark">
                  <p class="No name">Mostaza</p>

                  <p class="Yes name">Mostaza</p>
                </div>
                <label class="container1">
                  <input class="box" type="checkbox" />
                  <div class="checkmark">
                    <p class="No name">Ketchup</p>

                    <p class="Yes name">Ketchup</p>
                  </div>
                </label>
              </label>
            </label>
          </div>
        </div>

        <div class="extras">
          <h3>Extras:</h3>
          <div class="po">
            <label class="container1">
              <input class="box" type="checkbox" />
              <div class="checkmark">
                <p class="No name">Huevo Duro</p>

                <p class="Yes name">Huevo Duro</p>
              </div>
            </label>
            <label class="container1">
              <input class="box" className="box" type="checkbox" />
              <div class="checkmark">
                <p class="No name">Queso Cheddar</p>

                <p class="Yes name">Queso Cheddar</p>
              </div>
            </label>
            <label class="container1">
              <input class="box" type="checkbox" />
              <div class="checkmark">
                <p class="No name">Extra de Carne</p>

                <p class="Yes name">Extra de Carne</p>
              </div>
            </label>
          </div>
        </div>

        <div class="detalles">
          <h3>Detalles</h3>
          <input
            class="campo"
            maxlength="150"
            rows="2"
            size="50px"
            type="text"
            placeholder="Si querés, cambiar algo para que la tengan en cuenta en tu  pedido (máximo 150 caracteres)"
          />
        </div>
      </div>
{/*       <!-- ------------------------- -->
 */}    </div>


/* {     <button onClick={hacerPedido}>enviar pedido</button>
 }     */
  );
};

export { Finalizar };
