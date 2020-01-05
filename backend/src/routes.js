const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routes.get('/tweets', TweetController.index); //get: buscar uma informacao 
routes.post('/tweets', TweetController.store);//post: criar um novo registro

routes.post('/likes/:id', LikeController.store);
module.exports = routes;