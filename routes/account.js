const express = require('express');
const route = express.Router();
const accountcontroller = require('../controller/account');
const authapi = require('../controller/auth-api');

route.post('/register',authapi, accountcontroller.register);

route.post('/login', accountcontroller.login);

module.exports = route;