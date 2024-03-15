import { IProduct } from '../../types/types';
import { useCart } from '../../hooks/useCart';
type Props = { products: IProduct[] };
const ProductCard = ({ products }: Props) => {
  const { addToCart } = useCart();
  return (
    <>
      {products.map((product, i) => (
        <article
          key={i}
          className="flex flex-col overflow-hidden rounded bg-white shadow w-[100%]"
        >
          <div className="h-52">
            <img
              className="h-full w-full object-cover object-center"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="flex-1 space-y-3 p-5">
            <h3 className="text-xl font-semibold text-sky-500">
              {product.name}
            </h3>
            <h2 className="text-sm font-semibold leading-tight text-slate-800">
              {product.description}
            </h2>
            <p className="text-slate-500">{product.price}</p>
          </div>
          <button
            id="add-product"
            className="bg-logo-orange rounded-3xl text-text-paragraph text-sm w-4/6 items-center self-center"
            onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </button>
        </article>
      ))}
    </>
  );
};

export default ProductCard;
