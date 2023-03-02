const express = require('express');
const foodApi = require('../Api/Food');

const food = express.Router();
food.route('/food').get(foodApi.apiController);

module.exports = food;