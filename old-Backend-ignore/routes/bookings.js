const router = require("express").Router();
const Booking = require("../models/booking")
// const authMiddleware = require('../middleware/middleware')

router.post('/',async (req, res) => {
    const { contact, serviceId, vehicleInfo } = req.body;
  
    if (!serviceId || !vehicleInfo) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
  
    try {
      const booking = new Booking({
        contact,
        serviceId,
        vehicleInfo,
      });
  
      await booking.save();
      res.status(201).json({ message: 'Booking successful', bookingId: booking._id });
    } catch (error) {
      console.error('Error booking service:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  module.exports = router;