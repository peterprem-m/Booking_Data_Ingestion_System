const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    customerName: {type:String, required:true },
    bookingDate: {type: Date, required: true},
    bookingAmount: {type: Number, required: true},
    vendorDetails:{
        name:{type: String, required: true},
        contact:{type: String, required: true}
    } 
});

module.exports = mongoose.model('Booking', bookingSchema);