import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getUserTweetsStart = () => {
    return {
        type: actionTypes.GET_USER_TWEETS_START
    };
};
export const getUserTweetsSuccess = (username, tweets) => {
    return {
        type: actionTypes.GET_USER_TWEETS_SUCCESS,
        twitterUsername: username,
        userTweets: tweets
    };
};

export const getUserTweetsFailed = error => {
    return {
        type: actionTypes.GET_USER_TWEETS_FAILED,
        getTweetsError: error
    };
};

export const getUserTweets = username => {
    return dispatch => {
        dispatch(getUserTweetsStart());
        const usr = username.slice(1);
        axios
            .get(`/timeline/${usr}`)
            .then(response => {
                if (response.data.errors) {
                    throw response.data.errors[0];
                }
                dispatch(getUserTweetsSuccess(username, response.data));
            })
            .catch(error => {
                dispatch(getUserTweetsFailed(error));
            });
    };
};

export const loadMoreTweetsStart = () => {
    return {
        type: actionTypes.LOAD_MORE_TWEETS_START
    };
};

export const loadMoreTweetsSuccess = (tweets) => {
    return {
        type: actionTypes.LOAD_MORE_TWEETS_SUCCESS,
        allTweets: tweets
    };
};

export const loadMoreTweetsFailed = (error) => {
    return {
        type: actionTypes.LOAD_MORE_TWEETS_FAILED,
        loadMoreTweetsError: error
    };
};

export const loadMoreTweets = (username, tweets) => {
    return dispatch => {
        dispatch(loadMoreTweetsStart());
        const tweetsData = [...tweets];
        const lastTweet = { ...tweetsData[tweetsData.length - 1] };
        const lastTweetId = lastTweet.id;
        const usr = username.slice(1);
        axios
            .get(`/timeline/continueUsr${usr}/fromId${lastTweetId}`)
            .then(response => {
                if (response.data.errors) {
                    throw response.data.errors[0];
                }
                const newTweets = response.data.filter(
                    tw => tw.id !== lastTweetId
                );
                const allTweets = tweets.concat(newTweets);
                dispatch(loadMoreTweetsSuccess(allTweets));
            })
            .catch(error => {
                dispatch(loadMoreTweetsFailed(error));
            });
    };
};

export const resetError = () => {
    return {
        type: actionTypes.RESET_ERROR
    };
};
