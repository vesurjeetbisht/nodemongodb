const instructorModel = require('../../model/instructor');

const createInstructor = (model) => {
    return new Promise((resolve, reject) => {
        instructorModel.create(model, (err, res) => {
            if (err) {
                resolve(err)
            }
            else
                resolve(res)
        })
    });
}

module.exports = {
    createInstructor
}

