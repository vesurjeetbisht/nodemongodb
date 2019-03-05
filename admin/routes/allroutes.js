const express = require('express');

const allroutes = express();
const adminuserRoute = require('./adminuser');


allroutes.use('', adminuserRoute);

module.exports = allroutes;
