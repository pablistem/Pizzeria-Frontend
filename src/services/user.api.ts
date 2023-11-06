import { ILoginPayload, ISignUpPayload } from '../types/types';
import { AxiosResponse, AxiosError } from 'axios';
import Axios from '../services/axios.api';

const controller = new AbortController();

export const login = async (payload: ILoginPayload): Promise<unknown> => {
  try {
    const res: AxiosResponse<unknown> = await Axios.post(
      '/auth/login',
      payload,
      {
        signal: controller.signal,
      },
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
};

export const signup = async (payload: ISignUpPayload): Promise<unknown> => {
  try {
    const res: AxiosResponse<unknown> = await Axios.post(
      '/auth/signup',
      payload,
      {
        signal: controller.signal,
      },
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
};
