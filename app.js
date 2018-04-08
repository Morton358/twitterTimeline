const express = require('express');
const Twit = require('twit');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

// let tweets = null;
//
// const params = {
//     screen_name: username,
//     max_id: 977979599102595100,
//     count: 4,
//     trim_user: true,
//     exclude_replies: true
// }
//
// const client = new Twit({
//     consumer_key: process.env.TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
//     timeout_ms: 60 * 1000
// });
// client
//     .get('statuses/user_timeline', params)
//     .catch(error => {
//         console.log('caught error', error.stack);
//     })
//     .then(result => {
//         tweets = result.data;
//         console.log('data', result.data);
//     });

const expressReqRes = async username => {
    try {
        const tweets = await getTweets(username);
        console.log(tweets);
        return tweets;
    } catch (err) {
        console.log(err);
    }
};

const getTweets = async username => {
    const params = {
        screen_name: username,
        max_id: 977979599102595100,
        count: 4,
        trim_user: true,
        exclude_replies: true
    };

    console.log(params);

    const client = await new Twit({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        timeout_ms: 60 * 1000
    });

    await client
        .get('statuses/user_timeline', params)
        .catch(error => {
            console.log('caught error', error.stack);
        })
        .then(result => {
            const tweets = result.data;
            console.log('data', result.data);
            return tweets;
        });
};

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.get('/:username', async (req, res) => {
    console.log(req.params.username);
    const tweets = await expressReqRes(req.params.username);
    res.send(tweets);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
