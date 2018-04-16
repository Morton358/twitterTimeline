import React, { Component } from 'react';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import ScrollToTop from 'react-scroll-up';

import classes from './App.css';
import Header from './components/Header/Header';
import UsernameForm from './components/UsernameForm/UsernameForm';
import Tweets from './components/Tweets/Tweets';
import ModalError from './components/ModalError/ModalError';
import { checkValidityInput } from './share/utility';
import scrollUpIcon from './assets/images/scroll_up_icon_white.svg';
import * as actions from './store/actions/index';

export class App extends Component {
    state = {
        username: '',
        inputValid: true,
        inputTouched: false
    };

    handleInputUsername = event => {
        const validity = checkValidityInput(event.target.value);
        this.setState({
            username: event.target.value,
            inputValid: validity,
            inputTouched: true
        });
    };

    handleSubmitForm = event => {
        event.preventDefault();
        this.props.onGetUserTweets(this.state.username);
    };
    handleLoadMore = event => {
        event.preventDefault();
        this.props.onLoadMoreTweets(this.props.username, this.props.tweets);
    };

    handleCloseModalError = () => {
        this.props.onResetError();
    };

    render() {
        let tweetsData = null;
        let loadMoreBtn = null;
        let modalError = null;
        let scrollUpBtn = null;
        if (this.props.tweets) {
            tweetsData = (
                <Tweets
                    tweets={this.props.tweets}
                    username={this.props.username}
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
            scrollUpBtn = (
                <ScrollToTop showUnder={160}>
                    <img
                        src={scrollUpIcon}
                        className={classes.ScrollUpBtn}
                        alt="icon"
                    />
                </ScrollToTop>
            );
        }
        if (this.props.loading) {
            loadMoreBtn = <CircularProgress size={50} />;
        }
        if (this.props.errorOccured) {
            modalError = (
                <ModalError
                    open
                    close={this.handleCloseModalError}
                    errorMsg={this.props.error.message}
                    handleClick={this.handleCloseModalError}
                />
            );
        }
        return (
            <div className={classes.App}>
                {modalError}
                <Header />
                <UsernameForm
                    disableBtn={
                        !this.state.inputValid || !this.state.inputTouched
                    }
                    error={!this.state.inputValid && this.state.inputTouched}
                    inputHandler={event => this.handleInputUsername(event)}
                    submitHandler={event => this.handleSubmitForm(event)}
                />
                {tweetsData}
                {loadMoreBtn}
                {scrollUpBtn}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.username,
        tweets: state.tweets,
        error: state.error,
        errorOccured: state.errorOccured,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetUserTweets: username => dispatch(actions.getUserTweets(username)),
        onLoadMoreTweets: (username, tweets) =>
            dispatch(actions.loadMoreTweets(username, tweets)),
        onResetError: () => dispatch(actions.resetError())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
