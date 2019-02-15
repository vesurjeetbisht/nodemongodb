const mongoose = require('mongoose')
const schema = mongoose.Schema;

const userModel = new schema({
    username: { type: String },
    password: { type: String },
    email: { type: String },
    contact: { type: String }
});
module.exports = mongoose.model('users', userModel);