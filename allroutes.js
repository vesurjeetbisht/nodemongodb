const express = require('express');
const allroutes = express();


const instructorRoutes = require('./routes/instructorList');
const accountroutes = require('./routes/account');

const adminRoutes = require('./admin/routes/allroutes');

allroutes.use('/instructor', instructorRoutes);
allroutes.use('/account', accountroutes);

allroutes.use('/admin', adminRoutes);

module.exports = allroutes;