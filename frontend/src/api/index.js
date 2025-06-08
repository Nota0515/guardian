import axios from 'axios'

const API = axios.create({
    baseURL:import.meta.env.VITE_BASE_URI ,
});

API.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config ;
} , error => Promise.reject(error))


export default  API ;