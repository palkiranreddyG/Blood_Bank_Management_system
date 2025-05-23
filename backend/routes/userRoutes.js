const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /api/users/alerts/:email
router.get('/alerts/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ alerts: [] });

    res.json({ alerts: user.alerts || [] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /api/users/alerts/mark-seen/:email
router.put('/alerts/mark-seen/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Mark all alerts as seen
    user.alerts = user.alerts.map(alert => ({ ...alert, seen: true }));
    await user.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/users/alerts/add
// Admin posts alerts to specific users
router.post('/alerts/add', async (req, res) => {
  try {
    const { email, message, bloodGroup } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Add a new alert
    const newAlert = {
      message,
      bloodGroup,
      seen: false,
      timestamp: new Date()
    };

    user.alerts.push(newAlert);
    await user.save();

    res.json({ success: true, alert: newAlert });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
