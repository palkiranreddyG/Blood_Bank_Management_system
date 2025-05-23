const express = require('express');
const router = express.Router();
const BloodRequest = require('../models/BloodRequest');

// @route   POST /api/blood-requests
// @desc    Post a new urgent blood request
// @access  Public
router.post('/', async (req, res) => {
  try {
    const {
      requesterName,
      bloodGroup,
      location,
      contactNumber,
      hospital,
      urgencyLevel,
      message,
    } = req.body;

    const newRequest = new BloodRequest({
      requesterName,
      bloodGroup,
      location,
      contactNumber,
      hospital,
      urgencyLevel,
      message,
    });

    await newRequest.save();
    res.status(201).json({ success: true, message: 'Blood request posted successfully!' });
  } catch (error) {
    console.error('Error posting blood request:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// (Optional) GET route to fetch requests
router.get('/', async (req, res) => {
  try {
    const requests = await BloodRequest.find().sort({ datePosted: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch requests' });
  }
});

module.exports = router;
