import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.twitter.com',
    body: 'grant_type=client_credentials'
});

export default instance;
