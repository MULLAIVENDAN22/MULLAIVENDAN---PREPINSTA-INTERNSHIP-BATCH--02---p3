const express = require('express');
const Order = require('../models/Order');
const Product = require('../models/Product');
const router = express.Router();

// Add products to cart (placeholder, not implemented)
router.post('/cart', (req, res) => {
  res.status(200).send('Add to cart endpoint');
});

// View cart (placeholder, not implemented)
router.get('/cart', (req, res) => {
  res.status(200).send('View cart endpoint');
});

// Remove items from cart (placeholder, not implemented)
router.delete('/cart/:id', (req, res) => {
  res.status(200).send('Remove from cart endpoint');
});

// Place an order
router.post('/orders', async (req, res) => {
  const { userId, products, totalPrice } = req.body;
  try {
    const order = new Order({ user: userId, products, totalPrice });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;