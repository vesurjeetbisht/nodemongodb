const instructorQuery = require('../query/instructor');

const createInstructor = (req, res) => {
    var model = req.body;

    instructorQuery.createInstructor(model).then(info => {
        return res.status(200).json({ message: 'record saved successfully', info: info });
    });
}

module.exports = {
    createInstructor
}