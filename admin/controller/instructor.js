const instructorQuery = require('../query/instructor');

const createInstructor = (req, res) => {
    var model = req.body;
    model.active = true;
    instructorQuery.createInstructor(model).then(info => {
        return res.status(200).json({ message: 'record saved successfully', info: info });
    });
}
const instructorlist = (req, res) => {
    instructorQuery.getInstructorList().then((info) => {
        return res.status(200).json({ message: 'instructorlist', info: info });
    });

}
const getInstructorInfo = (req, res) => {
    var InstructorID = req.body.empid
    instructorQuery.getInstructorInfo(InstructorID).then((info) => {
        return res.status(200).json({ info: info });
    })
}
const deleteInstructor = (req, res) => {
    var model = req.body;
    model.active = false;
    instructorQuery.deleteInstructor(model).then(info => {
        return res.status(200).json({ message: 'record removed successfully', info: true });
    }, reject => {
        return res.status(500).json({ message: reject.message });
    });
}

module.exports = {
    createInstructor,
    instructorlist,
    getInstructorInfo,
    deleteInstructor
}