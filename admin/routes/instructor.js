const express = require('express');
const router = express();
const instructorController = require('../controller/instructor');

router.post('/create', instructorController.createInstructor);

module.exports = router
