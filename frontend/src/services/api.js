import axios from 'axios';

const api = axios.create({
  baseURL: process.env.APP_REACT_API_URL,
});

export default api;
