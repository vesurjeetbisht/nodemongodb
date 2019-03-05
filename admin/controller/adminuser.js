const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminuserQuery = require('../query/adminuser');
const adminuserModel = require('../model/adminuser');


const register = (req, res) => {
    let inputmodel = {};
    inputmodel.name = req.body.name;
    inputmodel.email = req.body.email;
    inputmodel.password = req.body.password;
    inputmodel.role = req.body.role;
    inputmodel.createdon = new Date();

    bcrypt.hash(inputmodel.password, 10, (err, encrypted) => {
        if (err)
            res.status(500).json({ json: 'password not encrypted' });
        else {
            inputmodel.password = encrypted;
            adminuserQuery.registerAdminUser(inputmodel).then(info => {
                res.status(200).json(info);
            });
        }

    });
}

const login = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    adminuserQuery.getAdminUserByEmail(email).then(info => {
        if (info) {
            bcrypt.compare(password, info.password, (err, same) => {
                if (!same) {
                    res.status(401).json({ messag: 'invalid userid and password' });
                }
                else {
                    const token = jwt.sign(
                        {
                            email: info.email,
                            userid: info._id,
                            role: info.role
                        },
                        process.env.jwtsecretkey,
                        {
                            expiresIn: '1h'
                        }
                    )
                    res.status(200).json({ token: token,name:info.name });
                }
            })
        }
    })
}


module.exports = {
    register, login
}