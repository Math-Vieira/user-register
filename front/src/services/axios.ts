import axios from 'axios';
import { parseCookies } from 'nookies';

export function getAPIClient(ctx?: any) {
  const { 'user.token': token } = parseCookies(ctx);

  console.log({ token });

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
