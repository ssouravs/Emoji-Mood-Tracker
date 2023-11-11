// Sample emoji suggestions mapping
const emojiMapping = {
    happy: '😊',
    sad: '😢',
    love: '❤️',
    excited: '🎉',
    angry: '😡',
    relaxed: '😌',
    // Add more mappings as needed
  };
  
  // Function to suggest emojis based on mood notes
  const suggestEmojis = (moodNotes) => {
    const lowerCaseNotes = moodNotes.toLowerCase();
    const suggestedEmojis = Object.keys(emojiMapping)
      .filter(keyword => lowerCaseNotes.includes(keyword))
      .map(keyword => emojiMapping[keyword]);
    return suggestedEmojis;
  };

  const emojiSuggestions=async (req, res) => {
    try {
      const { notes } = req.body;
  
      // Validate that notes are present in the request body
      if (!notes) {
        return res.status(400).json({ error: 'Notes are required in the request body.' });
      }

      // Suggest emojis based on the mood notes
      const suggestedEmojis = suggestEmojis(notes);
  
      // Return the suggested emojis along with any other response data
      res.json({ success: true, suggestedEmojis });
    } catch (error) {
      console.error('Error logging mood entry:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  module.exports=emojiSuggestions;