const express = require('express');

const {getSearch} = require('../controllers/SearchController');

const searchRouter = express.Router();

searchRouter.get('/search/:query', getSearch);

module.exports = searchRouter;