# Tweets Timeline

Web-app that displays Twitter Timeline for given user.

* [Demo](https://get-twitts-by-username.herokuapp.com/)

## Getting Started

##### Go to :
* [Twitter Application Management](https://apps.twitter.com/)

And generate:
* Consumer Key (API Key);
* Consumer Secret (API Secret);
* Access Token;
* Access Token Secret;

Then in folder where you run git clone of this repo, create file .env with this content:

TWITTER_CONSUMER_KEY = Consumer Key from Twitter App Management 

TWITTER_CONSUMER_SECRET = Consumer Secret from Twitter App Management

TWITTER_ACCESS_TOKEN_KEY = Access Token from Twitter App Management 

TWITTER_ACCESS_TOKEN_SECRET = Access Token Secret from Twitter App Management 


Then:

```
yarn in root folder
yarn in client folder
yarn dev in root folder
```

## Running the tests

Tests was created with:

* Jest
* Enzyme

At folder client/ run:

```
yarn test
```

## Deployment

You can prepare and deploy project in Heroku with this commands:

```
yarn heroku-postbuild && yarn start

```
## Built With

* NodeJS
* create-react-app
* Express JS
* Twitt
* Material-UI
* Redux
* Redux Saga

## Authors

* **Volodymyr Kovalchuk**

## License

This project is licensed under the MIT License 
