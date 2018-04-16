import { takeEvery } from 'redux-saga/effects';

import { getUserTweetsSaga, loadMoreTweetsSaga } from './app';
import * as actionTypes from '../actions/actionTypes';

export function* watchApp() {
    yield takeEvery(actionTypes.GET_USER_TWEETS_INITIAL, getUserTweetsSaga);
    yield takeEvery(actionTypes.LOAD_MORE_TWEETS_INITIAL, loadMoreTweetsSaga);
}
