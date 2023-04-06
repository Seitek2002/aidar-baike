import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'https://btcdo.online/api',
    // baseURL: 'http://localhost:8000/api',
    baseURL: 'https://bityx.com/api/lang'
})

export default axiosInstance