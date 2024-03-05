import axios, { AxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';

// export const api = getAPIClient();
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

api.interceptors.request.use(
  (config) => {
    const cookies = parseCookies();

    if (cookies['user.token']) {
      config.headers['Authorization'] = `Bearer ${cookies['user.token']}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);
