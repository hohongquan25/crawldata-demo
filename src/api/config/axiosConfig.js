import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://103.183.120.158:80', // Thay thế bằng URL của bạn
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Optional: Thêm các interceptors nếu cần
axiosInstance.interceptors.request.use(
  (config) => {
    // Thêm token vào headers nếu cần
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
