import axios from 'axios';

const api = axios.create({
    baseURL:  'http://192.168.0.100:3000/'   //  'http://classificasdosfsa-com.umbler.net',
})

export default api;