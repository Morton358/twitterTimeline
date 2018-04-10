import express from 'express';

import { createParams } from '../controllers/createParams';
import { generateCredentials } from '../controllers/generateCredentials';
import { getTweets } from '../controllers/getTweets';

let tweets = express.Router();

tweets.get('/continueUsr:username/fromId:id',
  (req, res, next) => {
    createParams(req, res)
      .then(() => next())
      .catch(error => res.json(error));
  },
  (req, res, next) => {
    generateCredentials(req, res)
      .then(() => next())
      .catch(error => res.json(error));
  },
  (req, res, next) => {
    getTweets(req, res)
      .then(response => res.json(response))
      .catch(error => res.json(error));
});

tweets.get('/:username',
  (req, res, next) => {
    createParams(req, res)
      .then(() => next())
      .catch(error => res.json(error));
  },
  (req, res, next) => {
    generateCredentials(req, res)
      .then(() => next())
      .catch(error => res.json(error));
  },
  (req, res, next) => {
    getTweets(req, res)
      .then(response => res.json(response))
      .catch(error => res.json(error));
});

export default tweets;
