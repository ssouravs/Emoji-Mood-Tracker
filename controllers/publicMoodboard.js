const { Mood, sequelize } = require('../models')

const publicMoodBoard= async(req,res)=>{
    try {
        const aggregatedData = await sequelize.query(`
          SELECT emojis, COUNT(*) as count
          FROM Moods
          GROUP BY emojis
        `, { type: sequelize.QueryTypes.SELECT });
    
        res.json({ success: true, data: aggregatedData });
      } catch (error) {
        console.error('Error fetching public mood board data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports=publicMoodBoard;