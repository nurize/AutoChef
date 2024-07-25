// routes/customerReport.js

const express = require('express');
const router = express.Router();
const Customer = require('../models/customerReport');
const { User } = require('../models/user'); // Destructure User from the exported object

// Define the route
router.post('/', async (req, res) => {
    try {
        const { name, email, satisfactionScore, feedback, userId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a new customer report linked to the user
        const newCustomerReport = new Customer({
            name,
            email,
            satisfactionScore,
            feedback,
            user: user._id
        });

        // Save the customer report to the database
        await newCustomerReport.save();

        // Respond with the newly created report
        res.status(201).json(newCustomerReport);
    } catch (error) {
        console.error('Error adding customer report:', error);
        res.status(500).json({ message: 'Error adding customer report' });
    }
});

module.exports = router;
