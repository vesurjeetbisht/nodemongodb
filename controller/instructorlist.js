const response = require('../utils/response');
const instructorQuery = require('../query/instructorQuery');
const userquery = require('../query/userquery');

const instructorlist = (req, res) => {
    var postCode = req.query.postcode;

    var userdata = req.userdata;

    userquery.getUserInstructorsbyEmail(userdata.email).then((info) => {
        instructorQuery.getInstructorByPostCode(postCode, info).then((info) => {
            response.sendsuccessData(res, 'instructor list', info);
        });
    })
}
const InstructorInfo = (req, res) => {
    var instructorID = req.query.id;
    instructorQuery.getInstructorByID(instructorID).then((info) => {
        response.sendsuccessData(res, 'instructor info', info);
    })
}
const updateInstructorPackage = (req, res) => {
    let userid = req.body.userid;
    let packages = req.body.packages;
    instructorQuery.addPackagesToUser(userid, packages).then((info) => {
        res.status(200).json({ message: info });
    })
}

module.exports = {
    instructorlist,
    InstructorInfo,
    updateInstructorPackage
}