import React from 'react';

import Tweet from './Tweet/Tweet';
import classes from './Tweets.css';

const tweets = (props) => {
    const tweets_data = props.tweets.map(({id, text, created_at}) => {
        return (
            <div key={id}>
                <Tweet
                    username={props.username}
                    text={text}
                    data={created_at}
                />
            </div>
        );
    });
    return <div className={classes.Tweets}>{tweets_data}</div>;
};

export default tweets;
