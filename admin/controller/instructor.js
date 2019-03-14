const instructorQuery = require('../query/instructor');
const upload = require('../../utils/fileuploadservice');
const singleUpload = upload.single('image')

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
const uploaduserImage = (req, res) => {
    singleUpload(req, res, function (err, some) {
        if (err) {
            return res.status(422).send({ errors: [{ title: 'Image Upload Error', detail: err.message }] });
        }

        return res.json({ 'imageUrl': req.file.location });
    });
}

module.exports = {
    createInstructor,
    instructorlist,
    getInstructorInfo,
    deleteInstructor,
    uploaduserImage
}