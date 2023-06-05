let mongoose = require("mongoose");
let dotenv = require("dotenv");

dotenv.config(); //Load environment variables

let connectDB = mongoose.connect(process.env.MONGOURL); //connect to the database

module.exports = connectDB;
