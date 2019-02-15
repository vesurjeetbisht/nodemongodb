const response = require('../utils/response');
const userquery = require('../query/userquery')
const bcrypt = require('bcrypt');
const login = (req, res) => {

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



module.exports = {
    login,
    register
}