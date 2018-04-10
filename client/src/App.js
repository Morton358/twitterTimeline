import React, { Component } from 'react';
import axios from './axios-instance';

import header from './assets/images/header-get-tweet.png';
import './App.css';

class App extends Component {
    state = {
        tweets: '',
        username: ''
    };

    handleInputUsername = event => {
        console.log(event.target.value);
        this.setState({ username: event.target.value });
    };
    handleSubmitForm = event => {
        event.preventDefault();
        if (this.state.username !== '') {
            const usr = this.state.username.slice(1);
            console.log(usr);
            axios
                .get(`/timeline/${usr}`)
                .then(response => {
                    console.log(response.data);
                    // this.setState({tweets: response.data});
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
                    console.log(error.config);
                });
        } else {
            console.log('Please write username');
        }
    };

    render() {
        const style = {
            backgroundImage: `url(${header})`
        };
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        src={header}
                        style={style}
                        className="App-header__image"
                        alt="logo"
                    />
                </header>
                <form className="App-form">
                    <div>
                        <label htmlFor="username">Write username: </label>
                        <input
                            className="App-form__input"
                            type="text"
                            required
                            placeholder="@voloyev"
                            pattern="^@?(\w){1,15}$"
                            onChange={this.handleInputUsername}
                        />
                        <p className="App-form__p">
                            Usernames must be 1-15 characters in length,
                            starting from '@' symbol
                        </p>
                    </div>
                    <div>
                        <button onClick={this.handleSubmitForm}>Submit</button>
                    </div>
                </form>
                <p className="App-intro">{this.state.response}</p>
            </div>
        );
    }
}

export default App;
