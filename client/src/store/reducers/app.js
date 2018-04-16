/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../share/utility';

const initialState = {
    username: '',
    tweets: '',
    error: null,
    errorOccured: false,
    loading: false
};

const getUserTweetsStart = state => {
    return updateObject(state, { loading: true });
};

const getUserTweetsSuccess = (state, action) => {
    return updateObject(state, {
        username: action.twitterUsername,
        tweets: action.userTweets,
        error: null,
        errorOccured: false,
        loading: false
    });
};

const getUserTweetsFailed = (state, action) => {
    return updateObject(state, {
        error: action.getTweetsError,
        errorOccured: true,
        loading: false
    });
};

const loadMoreTweetsStart = state => {
    return updateObject(state, { loading: true });
};

const loadMoreTweetsSuccess = (state, action) => {
    return updateObject(state, {
        tweets: action.allTweets,
        error: null,
        errorOccured: false,
        loading: false
    });
};

const loadMoreTweetsFailed = (state, action) => {
    return updateObject(state, {
        error: action.loadMoreTweetsError,
        errorOccured: true,
        loading: false
    });
};

const resetError = (state) => {
    return updateObject(state, {
        error: null,
        errorOccured: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_TWEETS_START:
            return getUserTweetsStart(state);
        case actionTypes.GET_USER_TWEETS_SUCCESS:
            return getUserTweetsSuccess(state, action);
        case actionTypes.GET_USER_TWEETS_FAILED:
            return getUserTweetsFailed(state, action);
        case actionTypes.LOAD_MORE_TWEETS_START:
            return loadMoreTweetsStart(state);
        case actionTypes.LOAD_MORE_TWEETS_SUCCESS:
            return loadMoreTweetsSuccess(state, action);
        case actionTypes.LOAD_MORE_TWEETS_FAILED:
            return loadMoreTweetsFailed(state, action);
        case actionTypes.RESET_ERROR:
            return resetError(state);
        default:
            return state;
    }
};

export default reducer;
