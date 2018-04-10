import React from 'react';

import classes from './UsernameForm.css';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const usernameForm = props => {
    return (
        <form className={classes.Form}>
            <div>
                <TextField
                    required
                    id="name"
                    label="Your Username:"
                    placeholder="@voloyev"
                    pattern="^@?(\w){1,15}$"
                    onChange={props.inputHandler}
                />
                <p className={classes.Form__p}>
                    Usernames must be 1-15 characters in length, starting from
                    '@' symbol
                </p>
            </div>
            <div>
                <Button
                    color="primary"
                    variant="raised"
                    size="small"
                    style={{ backgroundColor: '#4c91c7' }}
                    onClick={props.submitHandler}
                >
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default usernameForm;
