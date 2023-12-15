// routes/auth.js

const express = require('express');
const router = express.Router();
const { login , signup } = require('../controllers/authController');


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await login(email, password);

    res.status(result.status).json({ message: result.message, token: result.token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const {firstname, lastname, email, password } = req.body;
    const result = await signup(firstname, lastname, email, password);

    res.status(result.status).json({ message: result.message, token: result.token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
