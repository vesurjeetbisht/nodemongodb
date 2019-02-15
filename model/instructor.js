const mongoose = require('mongoose');
const schema = mongoose.Schema;

const InstructorSchema = new schema(
    {
        instructor_name: { type: String },
        instructor_postcode: { type: String }
    }
)

module.exports = mongoose.model('instructors', InstructorSchema);