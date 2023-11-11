const { v4: uuidv4 } = require('uuid');

const generateUniqueLink = () => {
  return uuidv4(); // Generates a random UUID
};

module.exports = { generateUniqueLink };
