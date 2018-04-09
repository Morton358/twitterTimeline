import express from 'express';

import tweets from './tweets';

let router = express.Router();

router.use('/timeline', tweets);

export default router;
