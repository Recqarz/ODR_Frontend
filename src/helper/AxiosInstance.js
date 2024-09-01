import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 600000,
});

// Request interceptor to add the token to headers
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Clear token and possibly redirect to login
            localStorage.clear();
            // Optionally, you can add a redirect to the login page here
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
