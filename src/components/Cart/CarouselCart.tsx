import { useCart } from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
const CarouselCart = () => {
  const { productsData } = useProducts();
  const { addToCart } = useCart();
  return (
    <div className="bg-white p-4 mb-20 h-40 w-[90%] flex justify-center items-center self-center rounded-xl overflow-x-auto overflow-y-auto space-x-4 relative bottom-5">
      <div className="flex space-x-3">
        {productsData?.map((product, i) => (
          <div
            key={i}
            className="flex-none justify-center items-center bg-white self-center"
          >
            <img
              src={product.image}
              alt="imagen"
              className="w-32 h-32 object-cover object-center"
            />
            <button
              id="add-item"
              className="bg-logo-orange rounded-3xl text-xs text-text-paragraph w-full items-center self-center"
              onClick={() => addToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCart;
