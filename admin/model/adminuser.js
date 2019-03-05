const mongoose = require('mongoose')
const schema = mongoose.Schema;

const adminSchema = new schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },
    createdon: { type: Date }
});

const adminModel = mongoose.model('adminuser', adminSchema);

module.exports = adminModel;