import axios from "axios";
type TAxiosOption = {
  baseURL: string;
  timeout: number;
  slientError: boolean;
  loading: boolean;
};

const config: TAxiosOption = {
  baseURL: process.env.VUE_APP_ACTIVITY_SERVER_TARGET,
  timeout: process.env.VUE_APP_API_TIMEOUT,
  slientError: false,
  loading: true
};

class Request {
  instance: AxiosInstance;
  constructor(config: TAxiosOption) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(data => {
      return data;
    });
    this.instance.interceptors.response.use(data => {
      return data;
    });
  }
  get<T, U>(url: string, data?: U, config = {}): Promise<T> {
    return this.instance.get(url, { params: data, ...config });
  }

  post<T, U>(url: string, data?: U, config = {}): Promise<T> {
    return this.instance.post(url, data, config);
  }
}
export default new Request(config);
