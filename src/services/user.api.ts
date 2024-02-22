import { IAddress, ILoginPayload, ISignUpPayload, IUser } from '../types/types';
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

export const userInfo = async (token: string) => {
  const res = await Axios.get('/user/me', {
    headers: { Authorization: `Bearer ${token}` },
    signal: controller.signal,
  });

  return res.data;
};

export const refreshSessions = async (): Promise<{ accessToken: string }> => {
  const res = await Axios.get('/auth/session', {
    withCredentials: true,
  });
  return res.data;
};

export const setSession = async (token: string) => {
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getUserData = async (): Promise<IUser> => {
  const res: AxiosResponse<IUser> = await Axios.get('/profile');
  return res.data;
};

export const getAddressData = async (): Promise<IAddress> => {
  const res: AxiosResponse<IAddress> = await Axios({
    url: '/address',
    method: 'GET',
  })
  return res.data;
}

export const addAddressData = async (address: IAddress): Promise<unknown> => {
  const res: AxiosResponse<IAddress> = await Axios({
    url: '/address',
    method: 'POST',
    data: JSON.stringify(address),
  })
  return res.data;
}
