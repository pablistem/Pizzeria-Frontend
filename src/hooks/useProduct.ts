import { useEffect, useState } from 'react';
import { IProduct } from '../types/types';
import { getProductsData } from '../services/product.api';
const useProducts = () => {
  const [productsData, setProductsData] = useState<IProduct[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProductsData();
        setProductsData(result);
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
