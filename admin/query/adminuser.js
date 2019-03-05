const adminuserModel = require('../model/adminuser');


const registerAdminUser = (inputModel) => {
    return new Promise((resolve, reject) => {
        adminuserModel.create(inputModel, (err, res) => {
            if (err)
                resolve(err)
            else
                resolve(res)
        });
    })
}

const getAdminUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        adminuserModel.findOne({ email: email }, (err, res) => {
            if (err)
                resolve(err)
            else
                resolve(res)
        })
    })
}


module.exports = {
    registerAdminUser,
    getAdminUserByEmail
}