const express = require('express');
const router = express();
const instructorController = require('../controller/instructor');

router.post('/create', instructorController.createInstructor);
router.get('/list', instructorController.instructorlist);
router.post('/info', instructorController.getInstructorInfo);
router.post('/delete', instructorController.deleteInstructor);
module.exports = router
