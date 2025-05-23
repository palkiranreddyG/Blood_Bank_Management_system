const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  hospitalName: String,
  hospitalType: String,
  hospitalAddress: String,
  hospitalPhone: String,
  licenseNumber: String,
  idProof: String,
  role: String,
});

module.exports = mongoose.model('Admin', adminSchema);
