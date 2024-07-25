// models/Customer.js

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    satisfactionScore: { type: Number, required: true },
    feedback: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Link to User model
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
