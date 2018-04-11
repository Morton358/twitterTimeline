import React from 'react';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

import classes from './Tweet.css';
import TweeterIcon from '../../../assets/images/Twitter_Social_Icon_Circle_White.svg';


const tweet = props => {
    let elem = document.createElement('textarea');
    elem.innerHTML = props.text;
    const decodedText = elem.value;
    const arrStr = decodedText.split(' ');
    let title = null;
    let text = null;
    if (arrStr[0] === 'RT') {
        title = `Retweeted ${arrStr[1]}`;
        text = arrStr.splice(2, arrStr.length - 2).join(' ');
    } else {
        text = arrStr.join(' ');
    }
    const year = props.data.split(' ').pop();
    const data = props.data.split(' ').splice(0, 3);
    const formattedData = data.concat(year).join(' ');

    return (
        <div>
            <Card className={classes.Card}>
                <CardHeader
                    avatar={<Avatar aria-label="Recipe">
                        <img
                            src={TweeterIcon}
                            className={classes.TwitterIcon}
                            alt="icon"
                        />
                    </Avatar>}
                    title={title}
                    subheader={formattedData}
                />
                <CardContent>
                    <Typography variant="headline" component="h2">
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default tweet;
