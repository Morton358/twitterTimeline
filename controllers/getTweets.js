export const getTweets = (req, res) => {
    return new Promise(async (resolve, reject) => {
        const credentials = await res.locals.credentials;
        credentials
            .get('statuses/user_timeline', res.locals.params)
            .then(result => {
                res.locals.tweets = result.data;
                console.log('[getTweets]:data', result.data);
                resolve(result.data);
            })
            .catch(error => {
                res.locals.tweets = error;
                console.log('[getTweets]: caught error', error.stack);
                reject({ message: `error getting of tweets ${error.stack}` });
            });
    });
};
