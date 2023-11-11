const {Mood} = require('../models/index');

const deleteMoodEntry = async (req, res) => {
  try {
    const { mood_id } = req.params;

    // Find the mood entry by moodId
    const moodToDelete = await Mood.findByPk(mood_id);

    if (!moodToDelete) {
      return res.status(404).json({ error: 'Mood entry not found' });
    }

    // Delete the mood entry
    await moodToDelete.destroy();

    res.json({ message: 'Mood entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting mood entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = deleteMoodEntry;
