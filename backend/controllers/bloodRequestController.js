const BloodRequest = require('../models/BloodRequest');

const postBloodRequest = async (req, res) => {
  try {
    const request = new BloodRequest(req.body);
    await request.save();
    // 🔔 Optional: Add notification logic here
    res.status(201).json({ message: 'Blood request posted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error posting blood request' });
  }
};

module.exports = { postBloodRequest };
