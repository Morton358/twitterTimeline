const express = require('express');
const Twit = require('twit');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

const params = { screen_name: 'voloyev', count: 3 };
let tweets = null;
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
        tweets = result.data
        console.log('data', result.data);
    });


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', (req, res) => {
    res.send(tweets);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
