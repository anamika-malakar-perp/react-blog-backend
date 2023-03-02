const express = require('express');
const technologyApi = require('../Api/Technology');

const technology = express.Router();
technology.route('/technology').get(technologyApi.apiController);

module.exports = technology;