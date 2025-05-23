const express = require('express');
const { getAllNamkeen, createNamkeen } = require('../controllers/namkeenController');

const router = express.Router();

router.get('/', getAllNamkeen);
router.post('/', createNamkeen);

module.exports = router;
