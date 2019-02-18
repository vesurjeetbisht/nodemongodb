const response = require('../utils/response');
const userquery = require('../query/userquery')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    userquery.login(email, password, (info) => {
      //  createJWTtoken({ email: info.email, userid: info._id }, (token) => {
            return response.sendsuccessData(res, 'logged in successfully', {});
       // })

    })
}

const register = (req, res) => {
    var usermodel = req.body.model;
    bcrypt.hash(usermodel.password, 10, (err, hash) => {
        if (err) {
            return response.sendErrorMessage(res, 500);
        }
        else {
            usermodel.password = hash;
            userquery.registerUser(usermodel).then((info) => {
                response.sendsuccessData(res, 'user saved successfully', info);
            })
        }
    });

}
const createJWTtoken = (payload) => {
    return new promise((reject, resolve) => {
        jwt.sign(payload,
            process.env.jwtsecretKey,
            {
                expiresIn: "1hr"
            }
        )
    })

}


module.exports = {
    login,
    register
}