const Cart = () => {
  const elementos = [
    {
      id: 1,
      nombre: 'Elemento 1',
      color: 'bg-white',
      imagen: '../src/assets/Pizza types/pizza-jamon-salchichas.jpg',
    },
    {
      id: 2,
      nombre: 'Elemento 2',
      color: 'bg-white',
      imagen: '../src/assets/Pizza types/pizza-cuatro-quesos.jpg',
    },
    {
      id: 3,
      nombre: 'Elemento 3',
      color: 'bg-white',
      imagen: '../src/assets/Pizza types/pizza-jamon.jpg',
    },
    // Puedes agregar más objetos al array según sea necesario
  ];
  const productosCompra = [
    {
      id: 1,
      texto: 'Pizza pepperoni',
      imagen: '../src/assets/Pizza types/pizza-cheese-pepperoni.jpg',
    },
    {
      id: 2,
      texto: 'Pizza cuatro quesos',
      imagen: '../src/assets/Pizza types/pizza-cuatro-quesos.jpg',
    },
    {
      id: 3,
      texto: 'Pizza jamon',
      imagen: '../src/assets/Pizza types/pizza-jamon.jpg',
    },
  ];
  return (
    <div className="absolute">
      <div className="fixed right-0 top-20 mx-auto w-72 bg-bubble-gum shadow-lg h-screen flex flex-col overflow-y-auto">
        <div className="flex justify-center items-center">
          <div className="bg-white p-4 mt-3 h-32 w-[90%] flex justify-center items-center rounded-2xl">
            <div className="grid grid-cols-2 gap-3 items-center w-full">
              <button className="text-white bg-logo-orange w-full rounded-2xl h-full ">
                Delivery
              </button>
              <button className="text-text-gray bg-light-gray rounded-2xl h-full">
                Retiro
              </button>
              <article>
                <p className="text-center">Llega en </p>
              </article>
              <article>
                <p className="text-center">Envío</p>
              </article>
              <article>
                <p className="text-center">30-45 min</p>
              </article>
              <article>
                <p className="text-center">800</p>
              </article>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start font-bold">
          <h3>Tu pedido</h3>
        </div>
        <div className="bg-logo-orange p-4 h-60 w-[100%] flex flex-col justify-center items-center self-center rounded-2xl overflow-x-auto overflow-y-auto space-y-1">
          {productosCompra.map((productoCompra) => (
            <div
              key={productoCompra.id}
              className={
                'flex items-center bg-white w-52 h-52 space-x-2 object-cover object-center'
              }
            >
              {/* Aquí puedes renderizar cualquier información del elemento */}
              <img
                src={productoCompra.imagen}
                className="w-full h-full object-cover object-center"
                alt="producto"
              />
              <div className="flex">
                <p className="text-text-paragraph text-sm">
                  {productoCompra.texto}
                </p>
              </div>
              <button className="bg-text-paragraph text-white">agregar</button>
            </div>
          ))}
        </div>
        <div className="flex justify-start items-start mt-1 font-bold">
          <h3>¿Queres agregar algo más?</h3>
        </div>
        <div className="bg-white p-4 mb-16 h-36 w-[90%] flex justify-center items-center self-center rounded-xl overflow-x-auto overflow-y-auto space-x-4">
          <div className="flex space-x-3 space-y-6">
            {elementos.map((elemento) => (
              <div
                key={elemento.id}
                className="flex-none justify-center items-center bg-white self-center"
              >
                <img
                  src={elemento.imagen}
                  alt="imagen"
                  className="w-32 h-32 object-cover object-center"
                />
                <div className="flex justify-center items-center">
                  <button className="bg-text-paragraph text-white">
                    Agregar
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* {elementos.map((elemento) => (
            <div key={elemento.id} className="max-w-xs">
              <img
                src={elemento.imagen}
                alt="Imagen 1"
                className="max-w-full"
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default Cart;
