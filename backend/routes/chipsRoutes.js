const express = require('express');
const { getAllChips, createChips } = require('../controllers/chipsController');

const router = express.Router();

// GET route for chips
router.get('/', getAllChips);

// POST route for chips
router.post('/', createChips);

module.exports = router;
