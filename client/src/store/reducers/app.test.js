import reducer from './app';
import * as actionTypes from '../actions/actionTypes';

describe('app reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            username: '',
            tweets: '',
            error: null,
            errorOccured: false,
            loading: false
        });
    });
    it('should store the tweets and username upon successfull receiving data from Twitter', () => {
        expect(
            reducer(
                {
                    username: '',
                    tweets: '',
                    error: null,
                    errorOccured: false,
                    loading: false
                },
                {
                    type: actionTypes.GET_USER_TWEETS_SUCCESS,
                    twitterUsername: '@some_username',
                    userTweets: [{ id: 1, text: 'some tweet' }]
                }
            )
        ).toEqual({
            username: '@some_username',
            tweets: [{ id: 1, text: 'some tweet' }],
            error: null,
            errorOccured: false,
            loading: false
        });
    });
});
