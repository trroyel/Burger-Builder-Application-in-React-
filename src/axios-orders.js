import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-8d951.firebaseio.com/'
});

export default instance;