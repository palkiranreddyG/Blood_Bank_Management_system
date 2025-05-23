const BloodRequest = require('../models/BloodRequest');
const User = require('../models/User');

// GET /api/users/alerts/:email
const getAlertsForUser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    // 🩸 Find blood requests matching the user's blood group
    const alerts = await BloodRequest.find({
      bloodGroup: user.bloodGroup,
    }).sort({ datePosted: -1 });

    res.json({ alerts });
  } catch (error) {
    console.error('Error fetching alerts:', error);
    res.status(500).json({ message: 'Error fetching alerts' });
  }
};

module.exports = { getAlertsForUser }; 