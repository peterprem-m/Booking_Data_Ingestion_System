const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async() => {
    try{
        if(!process.env.MONGO_URI){
            console.log(process.env.MONGO_URI);
            console.log('Not configured')
        }
        else{
            console.log('got it')
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('DB Connected');
        }
    }
    catch(error) {
        console.error('Connection error', error);
    }
}

module.exports = connectDB;