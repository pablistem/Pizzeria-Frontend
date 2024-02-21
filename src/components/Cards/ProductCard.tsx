import { IProduct } from '../../types/types';

type Props = { products: IProduct[] };
const ProductCard = ({ products }: Props) => {
  return (
    <>
      {products.map((obj, i) => (
        <article
          key={i}
          className="flex flex-col overflow-hidden rounded bg-white shadow w-[100%]"
        >
          <div className="h-52">
            <img
              className="h-full w-full object-cover object-center"
              src={obj.image}
              alt={obj.name}
            />
          </div>
          <div className="flex-1 space-y-3 p-5">
            <h3 className="text-xl font-semibold text-sky-500">{obj.name}</h3>
            <h2 className="text-sm font-semibold leading-tight text-slate-800">
              {obj.description}
            </h2>
            <p className="text-slate-500">{obj.price}</p>
          </div>
          <button className="bg-logo-orange rounded-3xl text-text-paragraph text-sm w-4/6 items-center self-center">
            Agregar al carrito
          </button>
        </article>
      ))}
    </>
  );
};

export default ProductCard;
