// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


const login = async (email, password) => {
  try {
    // console.log(password);
    const user = await User.findOne({ email });

    if (!user) {
      return { status: 404, message: 'User not found' };
    }

    if (password !== user.password) {
      return { status: 401, message: 'Invalid credentials' };
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log(token);
    return { status: 200, token };
  } catch (error) {
    console.error('Login error:', error);
    return { status: 500, message: 'Server error' };
  }
};


const protectedRoute = (req, res) => {
  try {
    // Access the user details from the request object after authentication
    const user = req.user;
    res.status(200).json({ message: 'Protected route', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { signup, login, protectedRoute };
