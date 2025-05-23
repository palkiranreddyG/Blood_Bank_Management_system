const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  dob: String,
  gender: String,
  bloodGroup: String,
  address: String,
  role: { type: String, default: 'user' },
  alerts: [
    {
      message: String,
      timestamp: { type: Date, default: Date.now },
      seen: { type: Boolean, default: false }
    }
  ]
});

module.exports = mongoose.models.User || mongoose.model('user', userSchema);
