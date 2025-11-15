import axios from 'axios';

export const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
  });

  return instance;
};
