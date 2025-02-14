require('dotenv').config();
const express = require('express');
const bookingRoutes = require('./routes/bookingRoutes')
const connectDB = require('./config/dbConfig')

connectDB();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/bookings', bookingRoutes);


app.listen(PORT,() =>console.log(`Server listening on ${PORT}`) );