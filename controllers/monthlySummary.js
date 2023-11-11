const { Mood, sequelize } = require('../models');
const { Op } = require('sequelize');

const monthlySummary=async (req, res) => {
    try {
      console.log("testing")
      const userId = req.userId; // Extract user ID from the authenticated user's token
      const { month, year } = req.query;
  
      if (!month || !year) {
        return res.status(400).json({ error: 'Both month and year parameters are required.' });
      }
  
      /*const startDate = new Date(`${year}-${month}-01`);
      const endDate = new Date(`${year}-${month + 1}-01`);*/
      const startDate = new Date(`${year}-${month.padStart(2, '0')}-01`);
      const endDate = new Date(`${year}-${(parseInt(month) + 1).toString().padStart(2, '0')}-01`);

  
      const monthlySummary = await Mood.findAll({
        where: {
          userId,
          createdAt: {
            [Op.between]: [startDate, endDate],
          },
        },
        attributes: [
          'emojis',
          'notes',
          [sequelize.fn('COUNT', sequelize.col('emojis')), 'emojiCount'],
        ],
        group: ['emojis', 'notes'],
        order: [[sequelize.fn('COUNT', sequelize.col('emojis')), 'DESC']],
        limit: 5, // Limit to the top 5 emojis by count
      });
  
      res.json({ success: true, monthlySummary });
    } catch (error) {
      console.error('Error fetching monthly summary:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  module.exports=monthlySummary;