import React, { Component } from 'react';
import axios from './axios-instance';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        tweets: ''
    };
    componentDidMount() {
        axios
            .get('/')
            .then(response => {
                console.log(response.data);
                // this.setState({tweets: response.data});
            })
            .catch( (error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.response}</p>
            </div>
        );
    }
}

export default App;
