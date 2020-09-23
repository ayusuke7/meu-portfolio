import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
});

async function configHandler(config) {
  config.crossdomain = true;
  return config;
}

async function errorHandler(error) {
  /*  */
  return Promise.reject(error);
}

api.interceptors.request.use(
  (config) => configHandler(config),
  (error) => errorHandler(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error)
);

export default api;
