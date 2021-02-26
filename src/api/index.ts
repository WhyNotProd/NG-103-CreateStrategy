import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
const { SNOWPACK_PUBLIC_REACT_APP_API_URL } = process.env;
// import { showAlert } from '../util';

const http: AxiosInstance = axios.create({
  baseURL: SNOWPACK_PUBLIC_REACT_APP_API_URL,
});

http.defaults.headers.post['Content-Type'] = 'application/json';

http.interceptors.response.use(
  async (response: AxiosResponse): Promise<any> => {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
  },
  (error: AxiosError) => {
    const { response, request }: {
      response?: AxiosResponse;
      request?: XMLHttpRequest;
    } = error;
    if (response) {
      if (response.status >= 400 && response.status < 500) {
        // showAlert(response.data?.data?.message, 'error');
        return null;
      }
    } else if (request) {
    //   showAlert('Request failed. Please try again.', 'error');
      return null;
    }
    return Promise.reject(error);
  }
);

export default http;