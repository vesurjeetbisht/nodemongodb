const mongoose = require('mongoose');
const schema = mongoose.Schema;

const instructor = require('./instructor');
const package = require('./package');


const bookingSchema = new Schema({
    instructor_id: { type: schema.Types.ObjectId, ref: 'instructors' },
    package_id: { type: schema.Types.ObjectId, ref: 'packages' },
    slottime: { type: String },
    training_startdate: { type: Date },
    bookingdate: { type: Date },
    userid: { type: schema.Types.ObjectId, ref: "users" }

})

const bookingModel = mongoose.model('booking', bookingSchema);

module.exports = bookingModel;