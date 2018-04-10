import React, { Component } from 'react';
import { Button } from 'antd';

import axios from './axios-instance';
import classes from './App.css';
import Header from './components/Header/Header';

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
        return (
            <div className="App">
                <Header />
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
                        <Button type="primary" onClick={this.handleSubmitForm}>
                            Submit
                        </Button>
                    </div>
                </form>
                <p className="App-intro">{this.state.response}</p>
            </div>
        );
    }
}

export default App;
