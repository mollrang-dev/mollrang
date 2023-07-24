import axios, {AxiosInstance, AxiosResponse, AxiosRequestConfig} from 'axios';
import {
  AuthorizationException,
  ForbiddenException,
  NotAllowedMethodException,
  NotFoundException,
} from '@utils/error/errorHandler';

const baseURL = 'http://localhost:3000/api';
const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

export interface RequestConfig extends AxiosRequestConfig {
  suppressStatusCode?: number[];
}

function AxiosAuthInterceptor<T>(response: AxiosResponse<T>): AxiosResponse {
  const status = response.status;
  if (status === 401) throw new AuthorizationException();
  if (status === 403) throw new ForbiddenException();
  if (status === 404) throw new NotFoundException();
  if (status === 405) throw new NotAllowedMethodException();
  return response;
}

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {response} = error;
    AxiosAuthInterceptor(response);
    return response;
  },
);
export const axiosInstance = instance;
