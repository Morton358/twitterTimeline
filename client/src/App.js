import React, { Component } from 'react';

import axios from './axios-instance';
import classes from './App.css';
import Header from './components/Header/Header';
import UsernameForm from './components/UsernameForm/UsernameForm';
import Tweets from './containers/Tweets/Tweets';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';

class App extends Component {
    state = {
        tweets: '',
        username: '',
        loading: false
    };

    handleInputUsername = event => {
        console.log(event.target.value);
        this.setState({ username: event.target.value });
    };
    handleSubmitForm = event => {
        event.preventDefault();
        if (this.state.username !== '') {
            this.setState({ loading: true });
            const usr = this.state.username.slice(1);
            console.log(usr);
            axios
                .get(`/timeline/${usr}`)
                .then(response => {
                    console.log(`[handleSubmitForm]: ${response.data}`);
                    this.setState({ tweets: response.data, loading: false });
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    this.setState({ loading: false });
                    console.log(error.config);
                });
        } else {
            console.log('[handleSubmitForm]: Please write username');
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
            console.log(usr);
            axios
                .get(`/timeline/continueUsr${usr}/fromId${lastTweetId}`)
                .then(response => {
                    console.log(`[handleLoadMore]: ${response.data}`);
                    const newTweets = response.data.filter(
                        tw => tw.id !== lastTweetId
                    );
                    const allTweets = tweets.concat(newTweets);
                    this.setState({ tweets: allTweets, loading: false });
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    this.setState({ loading: false });
                    console.log(error.config);
                });
        } else {
            console.log('[LoadMore]: Error with username');
        }
    };

    render() {
        let tweetsData = null;
        let loadMoreBtn = null;
        if (this.state.tweets) {
            tweetsData = <Tweets tweets={this.state.tweets} />;
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
        return (
            <div className={classes.App}>
                <Header />
                <UsernameForm
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
