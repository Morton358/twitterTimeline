
import Twit from 'twit';
import dotenv from 'dotenv';

dotenv.config();

export const generateCredentials = (req, res) => {
    return new Promise((resolve, reject) => {
        try {
            res.locals.credentials = new Twit({
                consumer_key: process.env.TWITTER_CONSUMER_KEY,
                consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
                access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
                access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
                timeout_ms: 60 * 1000
            });
            resolve({ message: 'You sucessfully generate credentials' });
        } catch (error) {
            reject({ message: 'Fail generate credentials', error: error });
        }
    });
};
