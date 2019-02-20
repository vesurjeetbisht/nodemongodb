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

        var email = req.body.email;
        var password = req.body.password;
        userquery.getUserbyemail(email).then((info) => {
            bcrypt.compare(password, info.password, (err, same) => {
                if (err)
                    response.sendErrorMessage(res, err);
                else {
                    if (same) {
                        const token = jwt.sign(
                            {
                                email: info.email,
                                userid: info._id
                            },
                            process.env.jwtsecretkey,
                            {
                                expiresIn: "1h"
                            }
                        )
                        response.sendsuccessData(res, 'login successfully', { token: token });
                    }
                    else
                        response.sendErrorCustomMessage(res, 'Incorrect password', 500);
                }
            })
        });

    });
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
const verifyJwt = (token) => {
    const decodedval = jwt.verify(token, process.env.jwtsecretkey);
    return decodedval;
}


module.exports = {
    login,
    register,
    verifyJwt
}