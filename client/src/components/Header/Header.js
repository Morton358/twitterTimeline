import React from 'react';

import headerImage from '../../assets/images/header-get-tweet.png';
import classes from './Header.css';

const header = () => {
    const style = {
        backgroundImage: `url(${headerImage})`
    };
    return (
        <header className={classes.Header}>
            <img
                src={headerImage}
                style={style}
                className={classes.HeaderImage}
                role="photo"
            />
        </header>
    );
};

export default header;
