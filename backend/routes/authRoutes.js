const express = require('express');
const router = express.Router();
const multer = require('multer');
const { registerUser, registerAdmin } = require('../controllers/authcontroller');
const login = require('../controllers/logincontroller'); // ✅ Import login separately

// 🔧 Multer setup for admin ID proof file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File validation: Ensure only images (e.g., .jpg, .png) are uploaded for admin
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only image files are allowed.'), false);
  }
};

const upload = multer({ storage, fileFilter });

// ✅ Registration routes
router.post('/register/user', registerUser); // User registration
router.post('/register/admin', upload.single('idProof'), registerAdmin); // Admin registration with file upload

// ✅ Login route
router.post('/login', login); // Login (both User and Admin)

module.exports = router;
