 
 const mongoose = require("mongoose");
 const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
  travelDate: { type: Date, required: true },
  idProof: { type: String, required: true },       // path or filename of uploaded file
  healthCert: { type: String, require: true},     // optional file
  agreeTerms: { type: Boolean, required: true }, // checkbox
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;