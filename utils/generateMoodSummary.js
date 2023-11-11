const generateMoodSummary = (moodHistory) => {
    const moodSummary = moodHistory.map(({ emojis, notes }) => ({
      emojis: emojis.split(','),
      notes,
    }));
  
    return moodSummary;
  };
  
  module.exports = {generateMoodSummary};
  