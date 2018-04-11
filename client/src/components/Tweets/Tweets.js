import React from 'react';

import Tweet from './Tweet/Tweet';
import classes from './Tweets.css';

const tweets = (props) => {
    const tweets = props.tweets.map(tw => {
        return (
            <div key={tw.id}>
                <Tweet
                    username={props.username}
                    text={tw.text}
                    data={tw.created_at}
                />
            </div>
        );
    });
    return <div className={classes.Tweets}>{tweets}</div>;
};

export default tweets;
