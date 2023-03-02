const express = require('express');
const userApi = require('../Api/UserInfo');

const userinfo = express.Router();
userinfo.route('/userinfo').get(userApi.apiController);

module.exports = userinfo;