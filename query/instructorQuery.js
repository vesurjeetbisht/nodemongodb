const instructorModel = require('../model/instructor');


const getInstructorByPostCode = (postcode, userinfo) => {
    return new Promise((resolve, reject) => {
        let criteria = {};
        if (userinfo.role === "user")
            criteria = { _id: { $in: userinfo.instructors } };
        else
            criteria = {};
        let projection = {};

        instructorModel.find(criteria, projection).populate('package')
        .exec((err, data) => {

            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })

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
const addPackagesToUser = (userid, packages) => {
   return new Promise((resolve, reject) => {
        instructorModel.updateOne({ _id: userid }, { packages: packages }, (err, info) => {
            if (err)
                resolve(err);
            else
                resolve(info);
        });
    })
}

module.exports = {
    getInstructorByPostCode,
    getInstructorByID,
    addPackagesToUser
}