const mongoose = require('mongoose');

const bloodRequestSchema = new mongoose.Schema({
  requesterName: String,
  bloodGroup: String,
  location: String,
  contactNumber: String,
  hospital: String,
  urgencyLevel: String,
  message: String,
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.BloodRequest || mongoose.model('BloodRequest', bloodRequestSchema);
