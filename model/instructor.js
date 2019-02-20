const mongoose = require('mongoose');
const schema = mongoose.Schema;

const InstructorSchema = new schema(
    {
        instructor_name: { type: String },
        instructor_postcode: { type: String },
        package: {type: mongoose.Schema.Types.ObjectId, ref: 'package'}
    }
)

module.exports = mongoose.model('instructors', InstructorSchema);