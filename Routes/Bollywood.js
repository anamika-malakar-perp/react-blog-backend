const express = require('express');
const bollywoodApi = require('../Api/Bollywood');

const bollywood = express.Router();
bollywood.route('/bollywood').get(bollywoodApi.apiController);

module.exports = bollywood;