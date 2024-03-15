import { useCart } from '../../hooks/useCart';
import { CartCard } from '../Cards/CartCard';
import CarouselCart from './CarouselCart';

const Cart = () => {
  const { productsCart, addToCart, deleteItemfromcart, removeFromCart } =
    useCart();

  const calcTotal = (acc, curr) => acc + curr.quantity * curr.product.price;
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
        {Object.values(productsCart).length > 0 && (
          <div>
            <div className="p-4 w-[100%] flex flex-col justify-center items-center self-center rounded-2xl overflow-x-auto overflow-y-auto">
              {Object.values(productsCart).map((cartProduct) => (
                <CartCard
                  key={cartProduct.product.id}
                  cartProduct={cartProduct}
                  onDelete={() => deleteItemfromcart(cartProduct.product)}
                  onAdd={() => addToCart(cartProduct.product)}
                  onRemove={() => removeFromCart(cartProduct.product)}
                ></CartCard>
              ))}
            </div>

            <div className="flex justify-around">
              <div className="relative">
                <p className="text-text-paragraph">Total</p>
                <p className="text-text-paragraph">
                  {Object.values(productsCart).reduce(calcTotal, 0)}
                </p>
              </div>
              <button className="text-text-paragraph bg-logo-orange relative w-24 rounded-3xl">
                Pagar
              </button>
            </div>
          </div>
        )}

        <h3 className=" font-bold text-text-paragraph mb-7">
          ¿Queres agregar algo más?
        </h3>
        <CarouselCart />
      </div>
    </div>
  );
};
export default Cart;
