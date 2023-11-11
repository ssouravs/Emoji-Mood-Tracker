// verifyToken.js
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Assuming you have a User model


const verifyToken = async (req, res, next) => {
  const token = req.get('Authorization');
  console.log("test");

  try {
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }
    //
    const tokenValue = token.startsWith('Bearer ') ? token.slice(7) : token;
    const decodedToken = jwt.verify(tokenValue, process.env.JWT_SECRET);

    // Check if the user associated with the token exists
    const user = await User.findOne({ where: { userId: decodedToken.userId } });

    if (!user) {
      return res.status(403).json({ message: 'Invalid token - User not found' });
    }

    // Attach user information to the request for further processing
    //req.user = user;
    req.userId = decodedToken.userId;

    next();
  } catch (error) {
    console.error(error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired' });
    } else {
      return res.status(403).json({ message: 'Invalid token' });
    }
  }
};

module.exports = verifyToken;
