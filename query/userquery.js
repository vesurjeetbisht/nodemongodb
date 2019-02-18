const userModel = require('../model/user');
const bcrypt = require('bcrypt');

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
const login = (email, password) => {
    return new Promise((reject, resolve) => {
        userModel.findOne({ email: email })
            .exec()
            .then((info) => {
                bcrypt.compare(password, info.password, (err, data) => {
                    if (err) {
                        resolve(err)
                    }
                    else {
                        resolve(info)
                    }
                })
            });

    });
}

module.exports = {
    registerUser,
    login
}