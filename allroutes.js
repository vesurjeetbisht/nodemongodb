const express = require('express');
const allroutes = express();

const instructorRoutes = require('./routes/instructorList');

allroutes.use('/instructor',instructorRoutes);



module.exports = allroutes;