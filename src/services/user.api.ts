import { ILoginPayload, ISignUpPayload, IUser } from '../types/types';
import { AxiosResponse } from 'axios';
import Axios from '../services/axios.api';

const controller = new AbortController();

export const login = async (payload: ILoginPayload): Promise<unknown> => {
  const res: AxiosResponse<unknown> = await Axios.post('/auth/login', payload, {
    signal: controller.signal,
  });
  return res.data;
};

export const signup = async (payload: ISignUpPayload): Promise<unknown> => {
  const res: AxiosResponse<unknown> = await Axios.post(
    '/auth/signup',
    payload,
    {
      signal: controller.signal,
    },
  );
  return res.data;
};

export const getUserData = async (): Promise<IUser> => {
  const res: AxiosResponse<IUser> = await Axios.get('/user/profile');
  return res.data;
};
