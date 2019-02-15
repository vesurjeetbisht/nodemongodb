const response = require('../utils/response');
const instructorQuery = require('../query/instructorQuery');

const instructorlist = (req, res) => {
    var postCode = req.query.postcode;
    instructorQuery.getInstructorByPostCode(postCode).then((info) => {
        response.sendsuccessData(res, 'instructor list', info);
    });


}
const InstructorInfo = (req, res) => {
    var instructorID = req.query.id;
    instructorQuery.getInstructorByID(instructorID).then((info) => {
        response.sendsuccessData(res, 'instructor info', info);
    })
}

module.exports = {
    instructorlist,
    InstructorInfo
}