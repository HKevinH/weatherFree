import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const LOCAL_URL = '';
const TOKEN = 'adsasddsa';
const instance: AxiosInstance = axios.create({
  baseURL: LOCAL_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
});

const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.get(url, config);
  return response.data;
};

const postRequest = async <T, R>(
  url: string,
  data: T,
  config?: AxiosRequestConfig,
): Promise<R> => {
  const response = await instance.post(url, data, config);
  return response.data;
};

const pathRequest = async <T, R>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig,
): Promise<R> => {
  const response = await instance.patch(url, data, config);
  return response.data;
};

const putRequest = async <T, R>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig,
): Promise<R> => {
  const response = await instance.put<R>(url, data, config);
  return response.data;
};

const deleteRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.delete<T>(url, config);
  return response.data;
};

export {getRequest, postRequest, pathRequest, deleteRequest, putRequest};
