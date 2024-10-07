import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust this if your backend URL is different.
});

// Set up interceptors for token handling if needed.
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;