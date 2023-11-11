const {Mood}=require('../models/index')
const { Op } = require('sequelize');

const rangeFiltering=async (req, res) => {
    try {
      const userId = req.userId; // Assuming userId is attached to the request by verifyToken middleware
      const { start, end } = req.query;
  
      if (!start || !end) {
        return res.status(400).json({ error: 'Both start and end dates are required.' });
      }
  
      const moodEntries = await Mood.findAll({
        where: {
          userId,
          createdAt: {
            [Op.between]: [start, end],
          },
        },
        order: [['createdAt', 'ASC']],
      });
  
      res.json({ success: true, moods: moodEntries });
    } catch (error) {
      console.error('Error fetching mood entries:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  module.exports=rangeFiltering;