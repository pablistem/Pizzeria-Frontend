import { useCart } from '../../context/CartContext';
import { IProduct } from '../../types/types';
const Cart = () => {
  const { productsCart, addToCart, removeFromCart, deleteItemfromcart } =
    useCart() as {
      productsCart: Record<string, IProduct>;
    };
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
        <h3 className="font-bold text-text-paragraph">Tu pedido</h3>
        <div className="p-4 h-56 w-[100%] flex flex-col justify-center items-center self-center rounded-2xl overflow-x-auto overflow-y-auto">
          {Object.values(productsCart).map((item) => (
            <div
              key={item.id}
              className="flex items-center w-48 h-52 space-x-2 object-cover object-center"
            >
              {/* Imagen */}
              <div className="flex flex-col ml-1">
                <img
                  src={item.image}
                  className="w-10 h-10 object-cover object-center"
                  alt="producto"
                />

                <button
                  className="text-text-paragraph"
                  onClick={() => deleteItemfromcart(item.id)}
                >
                  Editar
                </button>
              </div>

              <div className="flex flex-col flex-grow items-center justify-center">
                <p className="text-text-paragraph text-sm">
                  {item.description}
                </p>
                <div className="flex border-text-paragraph  rounded-3xl">
                  <button
                    className="text-text-paragraph w-6"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <p>0</p>
                  <button
                    className="text-text-paragraph w-6"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className=" font-bold text-text-paragraph mb-7">
          ¿Queres agregar algo más?
        </h3>
        {/* <div className="bg-white p-4 mb-20 h-36 w-[90%] flex justify-center items-center self-center rounded-xl overflow-x-auto overflow-y-auto space-x-4 relative bottom-5">
          <div className="flex space-x-3">
            {elements.map((elemento) => (
              <div
                key={elemento.id}
                className="flex-none justify-center items-center bg-white self-center"
              >
                <img
                  src={elemento.imagen}
                  alt="imagen"
                  className="w-32 h-32 object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div> */}
        <div className="flex justify-around">
          <div className="relative bottom-24">
            <p className="text-text-paragraph">Total</p>
            <p className="text-text-paragraph">0</p>
          </div>
          <button className="text-text-paragraph bg-logo-orange relative bottom-24 w-24 rounded-3xl">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
