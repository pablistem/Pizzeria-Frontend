import axios, { AxiosInstance } from 'axios';

export const Axios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const AxiosAuth: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
