const express = require('express');
const routes = express.Router();

const adminuserController = require('../controller/adminuser');

routes.post('/login', adminuserController.login);
routes.post('/register', adminuserController.register);

module.exports = routes;