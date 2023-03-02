const express = require('express');
const hollywoodApi = require('../Api/Hollywood');

const hollywood = express.Router();
hollywood.route('/hollywood').get(hollywoodApi.apiController);

module.exports = hollywood;