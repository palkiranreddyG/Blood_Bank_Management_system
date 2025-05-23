const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { registerUser, registerAdmin } = require('../controllers/registerController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.post('/user', registerUser);
router.post('/admin', upload.single('idProof'), registerAdmin);

module.exports = router;
