const jwt = require('jsonwebtoken')


module.exports.authapi = (req, res, callback) => {
    try {
        const decoded = jwt.verify(req.body.token, process.env.jwtsecretkey)
        req.userdata = decoded;
        next();
    }
    catch (err) {
        res.status(500).json({ message: "Auth failed" })
    }
}