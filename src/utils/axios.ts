import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://book-verse.onrender.com/api/v1`,
});

export default axiosInstance;
