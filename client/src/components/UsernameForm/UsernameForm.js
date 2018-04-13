import React from 'react';

import classes from './UsernameForm.css';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const usernameForm = props => {
    return (
        <div className={classes.Form}>
            <div>
                <TextField
                    required
                    error={props.error}
                    id="name"
                    label="Your Username:"
                    placeholder="@keen_ethics"
                    onChange={props.inputHandler}
                />
                <p className={classes.Form__p}>
                    Usernames must be 1-15 characters in length, starting from
                    '@' symbol
                </p>
            </div>
            <div>
                <Button
                    disabled={props.disableBtn}
                    color="primary"
                    variant="raised"
                    size="small"
                    style={{ backgroundColor: '#4c91c7' }}
                    onClick={props.submitHandler}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default usernameForm;
