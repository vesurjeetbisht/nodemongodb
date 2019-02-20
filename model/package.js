const mongoose = require('mongoose');
const schema = mongoose.Schema;

const packageschema = new schema({
    packagename: { type: String },
    packageprice: { type: Number }

})
const packagemodel = mongoose.model('package', packageschema);

module.exports = packagemodel;