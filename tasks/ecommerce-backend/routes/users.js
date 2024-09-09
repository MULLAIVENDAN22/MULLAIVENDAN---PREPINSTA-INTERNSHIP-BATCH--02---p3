const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Register a user
router.post('/register', async (req, res) => {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// User login (placeholder, not implemented)
router.post('/login', (req, res) => {
  res.status(200).send('Login endpoint');
});

// Get user profile
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('orders');
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});