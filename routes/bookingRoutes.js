const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Booking = require('../models/booking')

const bookingSchema = Joi.object({
    customerName: Joi.string().required(),
    bookingDate: Joi.date().required(),
    bookingAmount: Joi.number().positive().required(),
    vendorDetails:Joi.object({
        name: Joi.string(),
        contact: Joi.string()
    })
})

router.post('/', async(req, res) => {
    try{
        const { error, value } = bookingSchema.validate(req.body);
        if(error) { return res.json({message: error})}
        const newBooking = await Booking.create(req.body);
        res.json(newBooking);
    }
    catch(err) {
        res.json({message:err.message});
    }
})

router.get('/', async(req, res) => {
    try{
        const bookings = await Booking.find();
        if(!bookings) {
            return res.json({message:"No Bookings found"});
        }
        res.json(bookings);
    }
    catch(err) {
        res.json({message:err.message});
    }
})

router.get('/:id', async(req, res) => {
    try{
        const booking = await Booking.findById(req.params.id);
        if(!booking) {
            return res.json({message:"Booking not found"});
        }
        res.json(booking);
    }
    catch(err) {
        res.json({message:err.message});
    }
})

router.put('/:id', async(req, res) => {
    try{
        const { error, value } = bookingSchema.validate(req.body);
        if(error) { return res.json({message: error})}
        
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!updatedBooking) {
            return res.json({message:"Booking not found"});
        }
        res.json(updatedBooking);
    }
    catch(err) {
        res.json({message:err.message});
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
        if(!deletedBooking) {
            return res.json({message:"Booking not found"});
        }
        res.json(deletedBooking);
    }
    catch(err) {
        res.json({message:err.message});
    }
})

module.exports = router;