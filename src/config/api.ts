import axios, {AxiosInstance} from 'axios';

export const restAPI: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export type RestClient = typeof restAPI;
