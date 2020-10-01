import axios from "axios";
import { BASE_URL } from "../constants/endpoints";
import storage from "../utils/storage";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

async function configHandler(config) {
  const user = storage.getUser();

  if (!config?.url?.includes("/login") && !config?.url?.includes("/register")) {
    config.headers = { Authorization: `Bearer ${user?.token}` };
  }

  config.crossdomain = true;
  return config;
}

async function errorHandler(error) {
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
