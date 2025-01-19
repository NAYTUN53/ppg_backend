const express = require("express");
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();


// Middleware to parse JSON
app.use(express.json());
app.use(cors()); // enable cors for all routes and origin
app.use(authRouter);



// Middleware to parse URL-encoded form data
// app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("Mongoose connected.");
})

app.listen(PORT, '0.0.0.0', function(){
    console.log(`The sever is running on port ${PORT}`)
});