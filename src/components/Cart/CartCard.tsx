import { IProduct } from '../../types/types';

type Props = {
  cartProduct: { product: IProduct; quantity: number };
  onAdd: () => void;
  onRemove: () => void;
  onDelete: () => void;
};

export const CartCard = ({ cartProduct, onAdd, onRemove, onDelete }: Props) => {
  return (
    <div className="flex items-center w-48 h-52 space-x-2 object-cover object-center">
      <div className="flex flex-col ml-1">
        <img
          src={cartProduct.product.image}
          className="w-10 h-10 object-cover object-center"
          alt="producto"
        />

        <button className="text-text-paragraph" onClick={onDelete}>
          Eliminar
        </button>
      </div>

      <div className="flex flex-col flex-grow items-center justify-center">
        <p className="text-text-paragraph text-sm">
          {cartProduct.product.description}
        </p>
        <div className="flex border-text-paragraph  rounded-3xl">
          <button className="text-text-paragraph w-6" onClick={onRemove}>
            -
          </button>
          <p>{cartProduct.quantity}</p>
          <button className="text-text-paragraph w-6" onClick={onAdd}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
