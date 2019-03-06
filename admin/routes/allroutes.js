const express = require('express');

const allroutes = express();
const adminuserRoute = require('./adminuser');
const instructorRoute = require('./instructor');

allroutes.use('', adminuserRoute);
allroutes.use('/instructor',instructorRoute)

module.exports = allroutes;
