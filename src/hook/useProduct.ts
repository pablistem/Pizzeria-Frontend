import { useEffect, useState } from 'react';
import { IProduct } from '../types/types';
const useProducts = () => {
  const [productsData, setProductsData] = useState<IProduct[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProductsData([
          {
            name: 'Jamon',
            description: ' Salsa,muzzarella y jamon',
            price: '4000',
            image: '../../src/assets/Pizza types/pizza-jamon.jpg',
          },
          {
            name: 'Cuatro quesos',
            description:
              'Salsa, muzzarella, queso azul, queso parmesano y queso gorgonzola',
            price: '5000',
            image: '../../src/assets/Pizza types/pizza-cuatro-quesos.jpg',
          },
          {
            name: 'Jamon y salchichas',
            description: 'Salsa, muzzarella, jamon, salchichas',
            price: '4850',
            image: '../../src/assets/Pizza types/pizza-jamon-salchichas.jpg',
          },
          {
            name: 'Pepperoni',
            description: 'Salsa, muzzarella,pepperoni',
            price: '4562',
            image: '../../src/assets/Pizza types/pizza-cheese-pepperoni.jpg',
          },
        ]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { productsData, loading };
};

export default useProducts;
