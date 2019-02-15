var express = require('express');
var router = express.Router();

const InstructorListController = require('../controller/instructorlist');

router.get("/", InstructorListController.instructorlist);
router.get("/:id", InstructorListController.InstructorInfo);


module.exports = router;


