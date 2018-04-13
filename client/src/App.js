import React, { Component } from 'react';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import axios from 'axios';

import classes from './App.css';
import Header from './components/Header/Header';
import UsernameForm from './components/UsernameForm/UsernameForm';
import Tweets from './components/Tweets/Tweets';
import ModalError from './components/ModalError/ModalError';

class App extends Component {
    state = {
        tweets: '',
        username: '',
        loading: false,
        error: null,
        errorOccured: false,
        inputValid: true,
        inputTouched: false
    };

    checkValidityInput = value => {
        let isValid = true;
        // eslint-disable-next-line
        const pattern = /^@([a-zA-Z0-9_]){1,15}$/;
        isValid = pattern.test(value) && isValid;
        return isValid;
    };

    handleInputUsername = event => {
        const validity = this.checkValidityInput(event.target.value);
        this.setState({
            username: event.target.value,
            inputValid: validity,
            inputTouched: true
        });
    };

    handleSubmitForm = event => {
        event.preventDefault();
        if (this.state.username !== '') {
            this.setState({ loading: true });
            const usr = this.state.username.slice(1);
            axios
                .get(`/timeline/${usr}`)
                .then(response => {
                    if (response.data.errors) {
                        throw response.data.errors[0];
                    }
                    // console.log(response.data);
                    this.setState({ tweets: response.data, loading: false });
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                        error: error,
                        errorOccured: true
                    });
                });
        }
    };
    handleLoadMore = event => {
        event.preventDefault();
        if (this.state.username !== '') {
            this.setState({ loading: true });
            const usr = this.state.username.slice(1);
            const tweets = [...this.state.tweets];
            const lastTweet = { ...tweets[tweets.length - 1] };
            const lastTweetId = lastTweet.id;
            // console.log(usr);
            axios
                .get(`/timeline/continueUsr${usr}/fromId${lastTweetId}`)
                .then(response => {
                    if (response.data.errors) {
                        throw response.data.errors[0];
                    }
                    // console.log(`[handleLoadMore]: ${response.data}`);
                    const newTweets = response.data.filter(
                        tw => tw.id !== lastTweetId
                    );
                    const allTweets = tweets.concat(newTweets);
                    this.setState({ tweets: allTweets, loading: false });
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                        error: error,
                        errorOccured: true
                    });
                });
        } else {
            console.log('[LoadMore]: Error with username');
        }
    };

    handleCloseModalError = () => {
        this.setState({ errorOccured: false });
    };

    render() {
        let tweetsData = null;
        let loadMoreBtn = null;
        let modalError = null;
        if (this.state.tweets) {
            tweetsData = (
                <Tweets
                    tweets={this.state.tweets}
                    username={this.state.username}
                />
            );
            loadMoreBtn = (
                <Button
                    color="primary"
                    variant="raised"
                    size="large"
                    style={{ backgroundColor: '#4c91c7' }}
                    onClick={this.handleLoadMore}
                >
                    Load More
                </Button>
            );
        }
        if (this.state.loading) {
            loadMoreBtn = <CircularProgress size={50} />;
        }
        if (this.state.errorOccured) {
            modalError = (
                <ModalError
                    open
                    close={this.handleCloseModalError}
                    errorMsg={this.state.error.message}
                    handleClick={this.handleCloseModalError}
                />
            );
        }
        return (
            <div className={classes.App}>
                {modalError}
                <Header />
                <UsernameForm
                    disableBtn={!this.state.inputValid || !this.state.inputTouched}
                    error={!this.state.inputValid && this.state.inputTouched}
                    inputHandler={event => this.handleInputUsername(event)}
                    submitHandler={event => this.handleSubmitForm(event)}
                />
                {tweetsData}
                {loadMoreBtn}
            </div>
        );
    }
}

export default App;
