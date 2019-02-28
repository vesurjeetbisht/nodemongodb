const bookingModel = require('../model/booking');


const saveBooking = (bookinginput) => {
    return new Promise((resolve, reject) => {
        bookingModel.create(bookinginput, (err, res) => {
            if (err)
                resolve(err)
            else
                resolve(res)
        })
    });

}


module.exports = {
    saveBooking
}