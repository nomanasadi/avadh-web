const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

// GET a product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

// POST a review to a product
router.post('/:id/reviews', async (req, res) => {
  try {
    const { user, rating, comment } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ msg: 'Product not found' });

    const review = { user, rating, comment };
    product.reviews.push(review);
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to add review' });
  }
});

module.exports = router;
