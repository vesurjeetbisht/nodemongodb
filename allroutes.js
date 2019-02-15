const express = require('express');
const allroutes = express();

const instructorRoutes = require('./routes/instructorList');
const accountroutes=require('./routes/account')

allroutes.use('/instructor',instructorRoutes);
allroutes.use('/account',accountroutes);



module.exports = allroutes;