const Admin = require('../models/Admin');
const User = require('../models/User'); // Assuming you also have a user model
const bcrypt = require('bcryptjs');

// USER registration (JSON data)
const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password, dob, gender, bloodGroup, address } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      dob,
      gender,
      bloodGroup,
      address,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error('User registration error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// ADMIN registration (multipart/form-data)
const registerAdmin = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      hospitalName,
      hospitalType,
      hospitalAddress,
      hospitalPhone,
      licenseNumber,
      role
    } = req.body;

    const idProof = req.file?.filename;

    if (!idProof) {
      return res.status(400).json({ message: 'ID Proof is required.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name,
      email,
      phone,
      password: hashedPassword,
      hospitalName,
      hospitalType,
      hospitalAddress,
      hospitalPhone,
      licenseNumber,
      role,
      idProof
    });

    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully', admin: newAdmin });
  } catch (err) {
    console.error('Admin registration error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  registerUser,
  registerAdmin
};
