export const getTweets = (req, res) => {
    return new Promise(async (resolve, reject) => {
        const credentials = await res.locals.credentials;
        credentials
            .get('statuses/user_timeline', res.locals.params)
            .then(result => {
                res.locals.tweets = result.data;
                resolve(result.data);
            })
            .catch(error => {
                res.locals.tweets = error;
                reject({ message: `error getting of tweets ${error.stack}` });
            });
    });
};
