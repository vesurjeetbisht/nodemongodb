const instructorModel = require('../model/instructor');


const getInstructorByPostCode = (postcode) => {
    return new Promise((resolve, reject) => {
        let criteria = {};
        let projection = {};
        instructorModel.find(criteria, projection, (err, data) => {

            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    });
}
const getInstructorByID = (ID) => {
    return new Promise((resolve, reject) => {
        let criteria = {};
        instructorModel.findById(ID, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }

        });
    })
}

module.exports = {
    getInstructorByPostCode,
    getInstructorByID
}