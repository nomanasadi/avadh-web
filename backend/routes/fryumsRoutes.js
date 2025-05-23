const express = require('express');
const { getAllFryums, createFryum } = require('../controllers/fryumsController');

const router = express.Router();

// GET route for fryums
router.get('/', getAllFryums);
router.post('/', createFryum);

module.exports = router;
