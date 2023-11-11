// controllers/userController.js
const {generateUniqueLink}=require('../utils/generateUniqueLink')
const {generateMoodSummary}=require('../utils/generateMoodSummary')

const { User, Mood } = require('../models');

const generateSharingLink = async (req, res) => {
  try {

    //
    const  userId  = req.userId;

    // Generate a unique sharing link (you might want to use a library like uuid)
    const sharingLink = generateUniqueLink();

    // Update the user with the generated sharing link
    await User.update({ sharingLink, isSharingEnabled: true }, { where: { userId } });

    res.json({ sharingLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while generating the sharing link.' });
  }
};

const disableSharing = async (req, res) => {
  try {
    const  userId  = req.userId;

    // Update the user to disable sharing
    await User.update({ isSharingEnabled: false }, { where: { userId } });

    res.json({ message: 'Sharing disabled successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while disabling sharing.' });
  }
};

const retrievePublicMoodHistory = async (req, res) => {
  try {
    const sharingLink = req.query;

    // Find the user by the sharing link
    const user = await User.findOne({ where: { sharingLink: String(sharingLink), isSharingEnabled: true } });
    console.log(user);

    if (!user) {
      return res.status(404).json({ error: 'User not found or sharing is not enabled.' });
    }

    // Retrieve mood history for the user
    const moodHistory = await Mood.findAll({ where: { userId: user.userId } });

    // Generate a mood summary
    const moodSummary = generateMoodSummary(moodHistory);

    res.json({ user, moodSummary });
  } catch (error) {
    console.error('Error retrieving public mood history:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  generateSharingLink,
  disableSharing,
  retrievePublicMoodHistory,
};
