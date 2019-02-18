const express = require('express');
const route = express.Router();
const accountcontroller = require('../controller/account')

route.post('/register', accountcontroller.register);
route.post('/login', accountcontroller.login);

module.exports = route;