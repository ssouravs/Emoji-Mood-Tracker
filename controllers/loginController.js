const {User}=require('../models/index')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({
            where: { email },
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // If the credentials are valid, generate a JWT token
        const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
            expiresIn: '2h', // Adjust the expiration time as needed
        });

        // Return the token in the response
        res.json({ token, userId: user.userId });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
};

module.exports = loginController;