//const verifyToken=require('../middlewares/verifyToken')
const {Mood} = require('../models/index');

const logMoodEntry = async (req, res) => {
  try {
    const { emojis, notes } = req.body;
    const userId = req.userId; // Assuming you have userId stored in the request from token verification

    if (!notes || !emojis) {
        return res.status(400).json({ message: 'Notes and emojis are required.' });
      }

    // Insert the mood entry into the database using Sequelize
    const newMood = await Mood.create({
      userId,
      emojis,
      notes,
    });

    res.json({ message: 'Mood entry added successfully', mood: newMood });
  } catch (err) {
    console.error('Error logging mood entry:', err);
    return res.status(500).json({ error: 'Internal server error in logMoodEntry' });
  }
};

module.exports = logMoodEntry;
