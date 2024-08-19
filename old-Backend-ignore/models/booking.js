const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  contact: { type: Number, required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  vehicleInfo: { type: String },
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);
