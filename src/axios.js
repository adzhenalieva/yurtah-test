import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dev.yurtah.com/api/v1/listings'
});

export default instance;