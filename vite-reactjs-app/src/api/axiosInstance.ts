import axios from "axios";
import { BACKEND_BASE_URL } from "../utils/constant";

const axiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem("userInfo");
    const accessToken = userInfo ? JSON.parse(userInfo).accessToken : null;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
