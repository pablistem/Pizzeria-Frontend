import { ILoginPayload, ISignUpPayload } from '../types/types';
import { AxiosResponse } from 'axios';
import { Axios, AxiosAuth } from '../services/axios.api';

const controller = new AbortController();

export const login = async (payload: ILoginPayload): Promise<unknown> => {
  const res: AxiosResponse<unknown> = await AxiosAuth.post(
    '/auth/login',
    payload,
    {
      signal: controller.signal,
    },
  );
  return { data: res.data, fullRes: res };
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

export const userInfo = async (token: string) => {
  const res = await Axios.get('/user/me', {
    headers: { Authorization: `Bearer ${token}` },
    signal: controller.signal,
  });

  return res.data;
};
