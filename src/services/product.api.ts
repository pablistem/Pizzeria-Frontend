import { AxiosResponse } from 'axios';
import { IProduct } from '../types/types';
import { Axios } from '../services/axios.api';

export const getProductsData = async (): Promise<IProduct[]> => {
  const res: AxiosResponse<IProduct[]> = await Axios.get(
    'http://localhost:3000/product',
  );
  return res.data;
};
