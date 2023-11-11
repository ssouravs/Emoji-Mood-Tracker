const {Mood} = require('../models/index'); // Import your Mood model

const updateMoodEntry = async (req, res) => {
  try {
    const { mood_id } = req.params;
    const { emojis, notes } = req.body;
    //console.log("testing moodid",mood_id);
    if (!notes && !emojis) {
        return res.status(400).json({ message: 'Either of Notes or emojis are required.' });
      }
    // Find the mood entry by moodId
    const updatedMood = await Mood.findByPk(Number(mood_id));


    if (!updatedMood) {
      return res.status(404).json({ error: 'Mood entry not found' });
    }

    // Update the mood entry
    updatedMood.emojis = emojis;
    updatedMood.notes = notes;
    await updatedMood.save();

    res.json({ message: 'Mood entry updated successfully' });
  } catch (error) {
    console.error('Error updating mood entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports=updateMoodEntry;