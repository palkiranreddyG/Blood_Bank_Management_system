const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Admin = require('../models/Admin');

// USER REGISTER
const registerUser = async (req, res) => {
  console.log('User Register endpoint hit:', req.body);

  try {
    const { fullName, email, password, role } = req.body;
    const name = fullName;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'user',
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('User Registration error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// ADMIN REGISTER
const registerAdmin = async (req, res) => {
  console.log('Admin Register endpoint hit');

  try {
    const {
      name,
      email,
      password,
      phone,
      hospitalName,
      hospitalType,
      hospitalAddress,
      hospitalPhone,
      licenseNumber,
      role,
    } = req.body;

    const idProof = req.file ? req.file.filename : null;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

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
      idProof,
      role,
    });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (err) {
    console.error('Admin Registration error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// LOGIN (checks both User and Admin collections)
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    let role = 'user';

    if (!user) {
      user = await Admin.findOne({ email });
      role = 'admin';
    }

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token, username: user.name, role });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  registerUser,
  registerAdmin,
  login, // ✅ Export login
};