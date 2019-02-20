const express = require('express');
const router = express.Router();
const authapi = require('../controller/auth-api')

const InstructorListController = require('../controller/instructorlist');

router.post("/", authapi, InstructorListController.instructorlist);
router.get("/:id", InstructorListController.InstructorInfo);
router.post("/addpackagetoinstructor", authapi, InstructorListController.updateInstructorPackage)

module.exports = router;


