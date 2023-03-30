import axios from 'axios';

const api = axios.create({
    baseURL: `https://interno.saibweb.com.br/api/`
});

export default api;