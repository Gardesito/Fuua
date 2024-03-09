const Finalizar = () => {
  const hacerPedido = () => {
    console.log("pedido enviado");
  };

  return (
    <div>
      <h1>Pedido completo</h1>

      <button onClick={hacerPedido}>enviar pedido</button>
    </div>
  );
};

export { Finalizar };
