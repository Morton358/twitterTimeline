import express from 'express';
import dotenv from 'dotenv';

import router from './routes/index';

dotenv.config();

let app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));
