import React, { Component } from 'react';

import Tweet from '../../components/Tweet/Tweet';
import classes from './Tweets.css';

class Tweets extends Component {

    render() {
        console.log(this.props.tweets);
        const tweets = this.props.tweets.map(tw => {
            return (
                <div key={tw.id}>
                    <Tweet text={tw.text}/>
                </div>
            );
        });
        return (
            <div className={classes.Tweets}>
                {tweets}
            </div>

        );
    }

}

export default Tweets;
