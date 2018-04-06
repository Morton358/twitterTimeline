const Twit = require('twit');
require('dotenv').config();

// import axios from './axios-instance'

const params = { screen_name: 'voloyev', count: 3 };

// function rawurlencode(str) {
//     return encodeURIComponent(str)
//         .replace(/!/g, '%21')
//         .replace(/'/g, '%27')
//         .replace(/\(/g, '%28')
//         .replace(/\)/g, '%29')
//         .replace(/\*/g, '%2A');
// }
// BASE64_BEARER_TOKEN_CREDENTIALS
// const CONSUMER_KEY_RFC1738 = rawurlencode(config.CONSUMER_KEY);
// const CONSUMER_SECRET_RFC1738 = rawurlencode(config.CONSUMER_SECRET);
// const ACCESS_TOKEN_KEY_RFC1738 = rawurlencode(config.ACCESS_TOKEN_KEY);
// const ACCESS_TOKEN_SECRET_RFC1738 = rawurlencode(config.ACCESS_TOKEN_SECRET);
//
// const BEARER_TOKEN_CREDENTIALS =
//     CONSUMER_KEY_RFC1738 + ':' + CONSUMER_SECRET_RFC1738;
// const BASE64_BEARER_TOKEN_CREDENTIALS = Buffer.from(
//     BEARER_TOKEN_CREDENTIALS
// ).toString('base64');

const client = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});

client
    .get('statuses/user_timeline', params)
    .catch(error => {
        console.log('caught error', error.stack);
    })
    .then(result => {
        console.log('data', result.data);
    });

// axios.defaults.headers.common[
//     'Authorization'
// ] = `Basic ${BASE64_BEARER_TOKEN_CREDENTIALS}`;
// axios.defaults.headers.post['Content-Type'] =
//     'application/x-www-form-urlencoded;charset=UTF-8';
// axios
//     .post(`/oauth2/${BASE64_BEARER_TOKEN_CREDENTIALS}`)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(function(error) {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//         } else if (error.request) {
//             // The request was made but no response was received
//             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//             // http.ClientRequest in node.js
//             console.log(error.request);
//         } else {
//             // Something happened in setting up the request that triggered an Error
//             console.log('Error', error.message);
//         }
//         console.log(error.config);
//     });
