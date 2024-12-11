import axios from "axios";
import refreshToken from "./authService";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" }
});

if (process.env.NEXT_PUBLIC_DEVELOPMENT) {
  console.log("test");
}

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshToken().then(() => {
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem(
          "accessToken"
        )}`;
        return instance(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

export default instance;
