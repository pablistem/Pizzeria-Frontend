/* eslint-disable no-unused-vars */
import { createContext, useMemo, useState } from 'react';
import { IProduct } from '../types/types';

type CartContextType = {
  productsCart: {
    [key: number]: { product: IProduct; quantity: number };
  };
  addToCart: (product: IProduct) => void;
  deleteItemfromcart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
};

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsCart, setProductsCart] = useState<{
    [key: number]: { product: IProduct; quantity: number };
  }>({});

  const addToCart = (product: IProduct) => {
    setProductsCart((prevItems) => {
      const updatedCart = { ...prevItems };

      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity += 1;
      } else {
        updatedCart[product.id] = { product, quantity: 1 };
      }
      return updatedCart;
    });
  };

  const deleteItemfromcart = (product: IProduct) => {
    setProductsCart((prevItems) => {
      const updatedCart = { ...prevItems };
      updatedCart[product.id].quantity -= 1;
      if (updatedCart[product.id].quantity === 0) {
        delete updatedCart[product.id];
      }
      return updatedCart;
    });
  };

  const removeFromCart = (product: IProduct) => {
    setProductsCart((prevItems) => {
      const updatedCart = { ...prevItems };
      delete updatedCart[product.id];
      return updatedCart;
    });
  };
  const clearCart = () => {
    setProductsCart({});
  };

  const contextValue = useMemo(
    () => ({
      productsCart,
      addToCart,
      deleteItemfromcart,
      clearCart,
      removeFromCart,
    }),
    [productsCart],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
