import React from 'react';

import classes from './Tweet.css';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';

const tweet = (props) => (
    <div>
        <Card className={classes.Card}>
            <CardContent>
                <Typography className={classes.Title} color="textSecondary">
                    Word of the Day
                </Typography>
                <Typography variant="headline" component="h2">
                    {props.text}
                </Typography>
                <Typography color="textSecondary">
                    adjective
                </Typography>
                <Typography component="p">
                    well meaning and kindly.<br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    </div>
);

export default tweet;
