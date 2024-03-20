import { IAddress, ILoginPayload, ISignUpPayload, IProfile, ICreateAddress } from '../types/types';
import { AxiosResponse } from 'axios';
import { Axios, AxiosAuth } from '../services/axios.api';
import { AccessToken } from '../context/AuthContext';

const controller = new AbortController();

export const login = async (payload: ILoginPayload): Promise<{ accessToken: string }> => {
  const res: AxiosResponse<{ accessToken: string }> = await AxiosAuth.post(
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

export const logout = async (token: string | null): Promise<void> => {
  await AxiosAuth.get(
    '/auth/logout',
    {
      signal: controller.signal,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    },
  );
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
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
  });
  return res.data;
};

export const setSession = async (token: AccessToken) => {
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getProfile = async (): Promise<IProfile> => {
  const res: AxiosResponse<IProfile> = await Axios.get('/profile');
  return res.data;
};

export const createProfile = async (data: IProfile): Promise<void> => {
  await Axios({
    url: '/profile',
    method: 'POST',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
}

export const updateProfile = async (data: IProfile): Promise<void> => {
  await Axios({
    url: '/profile',
    method: 'PUT',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
}

export const getAddressesList = async (): Promise<IAddress> => {
  const res: AxiosResponse<IAddress> = await Axios({
    url: '/address',
    method: 'GET',
  })
  return res.data;
}

export const getAddressData = async (id: number): Promise<IAddress> => {
  const res: AxiosResponse<IAddress> = await Axios({
    url: `/address/${id}`,
    method: 'GET',
  })
  return res.data;
}

export const addAddressData = async (data: ICreateAddress): Promise<unknown> => {
  const res: AxiosResponse<ICreateAddress> = await Axios({
    url: '/address',
    method: 'POST',
    data: data,
  })
  return res.data;
}

export const updateAddressData = async (id: number, changes: IAddress): Promise<IAddress> => {
  const res: AxiosResponse<IAddress> = await Axios({
    url: `/address/${id}`,
    method: 'PUT',
    data: changes,
  })
  return res.data;
}