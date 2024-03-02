import { useCart } from "../../context/CartContext";
import { IProduct } from "../../types/types"
const { addToCart, removeFromCart, deleteItemfromcart } =
useCart()
const CartCard ({productsCart})=>{
    return(
        { Object.values(productsCart).map(() => (
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
    )
}
