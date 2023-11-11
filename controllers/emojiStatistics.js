const { Mood, sequelize } = require('../models/index');
const emojiStatistics= async (req,res)=>{
    try {
        console.log(req.query);
        const { userId } = req.params;
    
        const emojiStatistics = await sequelize.query(
          `SELECT emojis, COUNT(*) as count
          FROM Moods
          WHERE userId = :userId
          GROUP BY emojis`,
         {
          replacements: { userId },
          type: sequelize.QueryTypes.SELECT,
        });
    
        res.json({ success: true, emojiStatistics });
      } catch (error) {
        console.error('Error fetching emoji statistics:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports=emojiStatistics;