const {Mood}=require('../models/index')

const chronologicalSorting=async (req, res) => {
    try {
      const userId = req.userId; // Assuming userId is attached to the request by verifyToken middleware
  
      const moodEntries = await Mood.findAll({
        where: { userId },
        order: [['createdAt', 'ASC']],
      });
  
      res.json({ success: true, moods: moodEntries });
    } catch (error) {
      console.error('Error fetching mood entries:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  module.exports=chronologicalSorting;