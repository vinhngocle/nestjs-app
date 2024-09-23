import axios from "axios";
import { BACKEND_BASE_URL } from "../utils/constant";

const axiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
