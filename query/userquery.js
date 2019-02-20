const userModel = require('../model/user');


const registerUser = (model) => {
    return new Promise((resolve, reject) => {
        var user = new userModel();
        user.username = model.username;
        user.password = model.password;
        user.email = model.email;
        user.contact = model.contact;

        user.save((err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })

    });
}
const getUserbyemail = (email) => {
    return new Promise((resolve, reject) => {
        userModel.findOne({ email: email }, (err, data) => {
            if (err)
                resolve(err);
            else
                resolve(data);
        });
    })
}
const getUserInstructorsbyEmail = (email) => {
    
    return new Promise((resolve, reject) => {
        userModel
            .findOne({ email: email })
            .select('instructors role')
            .exec((err, info) => {
                if (err)
                    resolve(err)
                else
                    resolve(info)
            })
        // .then((info) => {
        //     if (info)
        //         resolve(info)
        // }).catch(err => {
        //     resolve(err)
        // });
    })
}
module.exports = {
    registerUser,
    getUserbyemail,
    getUserInstructorsbyEmail
}