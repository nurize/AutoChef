const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
    try {
        mongoose.connect(process.env.DB)
        console.log("Connected to Database successfully")
    } catch (error) {
        console.log(error)
        console.log("Could not connect to the Database")
    }
}