const jwt = require('jsonwebtoken')

module.exports = (req, res, callback) => {
    try {
        const decoded = jwt.verify(req.headers.authorization.replace('Bearer ',''), process.env.jwtsecretkey)
        req.userdata = decoded;
        callback();
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}