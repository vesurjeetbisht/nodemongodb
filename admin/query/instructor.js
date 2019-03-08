const instructorModel = require('../../model/instructor');

const createInstructor = (model) => {
    return new Promise((resolve, reject) => {
        if (model._id != undefined) {
            instructorModel.findByIdAndUpdate(model._id, model, (err, res) => {
                if (err) {
                    reject(err)
                }
                else
                    resolve(res)
            })
        }
        else {
            instructorModel.create(model, (err, res) => {
                if (err) {
                    reject(err)
                }
                else
                    resolve(res)
            });
        }

    });
}
const getInstructorList = () => {
    return new Promise((resolve, reject) => {
        instructorModel.find({ active: true }, (err, res) => {
            if (err)
                reject(err)
            else
                resolve(res)
        })
    })
}
const getInstructorInfo = (empID) => {
    return new Promise((resolve, reject) => {
        instructorModel.findById(empID, (err, res) => {
            if (err)
                reject(err)
            else
                resolve(res)
        })
    })
}
const deleteInstructor = (model) => {
    return new Promise((resolve, reject) => {
        if (model._id != undefined) {
            instructorModel.findOneAndUpdate({ _id: model._id }, model, (err, res) => {
                if (err) {
                    reject(err)
                }
                else
                    resolve(res)
            })
        }

    });
}

module.exports = {
    createInstructor,
    getInstructorList,
    getInstructorInfo,
    deleteInstructor
}

