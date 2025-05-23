const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  donorEmail: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  seen: { type: Boolean, default: false }, // To track if the alert is seen
});

module.exports = mongoose.model('Alert', AlertSchema);
