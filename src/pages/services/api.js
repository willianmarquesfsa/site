import axios from 'axios';

const api = axios.create({
    baseURL:  'http://classificasdosfsa-com.umbler.net'   //  'http://classificasdosfsa-com.umbler.net',
})

export default api;