const express = require('express');
const fitnessApi = require('../Api/Fitness');

const fitness = express.Router();
fitness.route('/fitness').get(fitnessApi.apiController);

module.exports = fitness;