import { createContext, useState, useContext } from 'react';
import { IProduct } from '../types/types';

const CartContext = createContext({} as unknown);

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState<{
    [key: number]: IProduct[];
  }>({});

  const addToCart = (product: IProduct) => {
    setProductsCart((prevItems) => {
      const updatedCart = { ...prevItems };

      updatedCart[product.id] = [...(updatedCart[product.id] || []), product];
      console.log(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId: IProduct) => {
    setProductsCart((prevItems) => {
      const updatedCart = { ...prevItems };
      if (updatedCart[productId.id]) {
        // Si el producto está en el carrito, decrementa la cantidad
        if (updatedCart && updatedCart[productId.id]) {
          delete updatedCart[productId.id];
        }
      }
      return updatedCart;
    });
  };
  const deleteItemfromcart = (product: IProduct) => {
    setProductsCart((prevItems) => {
      const updatedCart = { ...prevItems };
      console.log(updatedCart);
      if (updatedCart[product.id]) {
        delete updatedCart[product.id];
      }
      return updatedCart;
    });
  };
  const clearCart = () => {
    setProductsCart({});
  };
  // const getTotalPrice = () => {
  //   if (!productsCart) {
  //     return 0;
  //   } else {
  //     return Object.values(productsCart).reduce((total, items) => {
  //       return items.reduce(item)=>{

  //       };
  //     }, 0);
  //   }
  // };
  // const addToCart = (product: IProduct) => {

  //   setproductsCart((prevCart) => {

  //     const updatedCart = { ...prevCart };
  //     updatedCart[product.name] = [...(prevCart[product.name] || []), product];
  //     console.log(updatedCart);
  //     return updatedCart;
  //   });
  // };

  // //   const removeFromcart = (itemToRemove) => {
  // //     setproductsCart(productsCart.filter((item) => item !== itemToRemove));
  // //   };
  // const removeItem = (product) => {
  //   const deleteProductcart = { ...productsCart };
  //   deleteProductcart[product.name]?.pop;
  //   if (deleteProductcart[product.name]?.length === 0) {
  //     delete deleteProductcart[product.name];
  //   }
  //   setproductsCart(deleteProductcart);
  // };

  //   const cartTotal = productsCart.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0,
  //   );

  //Object.keys(productsCart).map((productName)=>acum + productsCart[pr]);
  return (
    <CartContext.Provider
      value={{
        productsCart,
        addToCart,
        removeFromCart,
        clearCart,
        deleteItemfromcart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
