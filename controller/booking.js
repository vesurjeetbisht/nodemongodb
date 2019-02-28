
const bookingQuery = require('../query/bookingquery');
const bookingModel = require('../model/booking');

const saveBooking = (req, res) => {
    const booking = req.body.model;

    bookingQuery.saveBooking(booking).then((info) => {
        res.status(200).json({ message: "Booking saved successfully" });
    });
}


module.exports = {
    saveBooking
}

