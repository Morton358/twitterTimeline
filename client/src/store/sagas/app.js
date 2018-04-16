import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* getUserTweetsSaga(action) {
    yield put(actions.getUserTweetsStart());
    const usr = action.username.slice(1);
    try {
        const response = yield axios.get(`/timeline/${usr}`);
        if (response.data.errors) {
            throw response.data.errors[0];
        }
        yield put(actions.getUserTweetsSuccess(action.username, response.data));
    } catch (error) {
        yield put(actions.getUserTweetsFailed(error));
    }
}

export function* loadMoreTweetsSaga(action) {
    yield put(actions.loadMoreTweetsStart());
    const tweetsData = [...action.tweets];
    const lastTweet = { ...tweetsData[tweetsData.length - 1] };
    const lastTweetId = lastTweet.id;
    const usr = action.username.slice(1);
    try {
        const response = yield axios.get(
            `/timeline/continueUsr${usr}/fromId${lastTweetId}`
        );
        if (response.data.errors) {
            throw response.data.errors[0];
        }
        const newTweets = response.data.filter(tw => tw.id !== lastTweetId);
        const allTweets = action.tweets.concat(newTweets);
        yield put(actions.loadMoreTweetsSuccess(allTweets));
    } catch (error) {
        yield put(actions.loadMoreTweetsFailed(error));
    }
}
