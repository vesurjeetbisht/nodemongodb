const mongoose = require('mongoose');
const schema = mongoose.Schema;

const InstructorSchema = new schema(
    {
        instructor_name: { type: String },
        instructor_email: { type: String },
        instructor_password: { type: String },
        instructor_description: { type: String },
        instructor_city: { type: String },
        instructor_postcode: { type: String },
        active: { type: Boolean },
        empimage: { type: String },
        friendimage: { type: String },
        package: [{ type: schema.Types.ObjectId, ref: 'package' }]
    }
)

module.exports = mongoose.model('instructors', InstructorSchema);