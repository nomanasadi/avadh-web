const express = require('express');
const router = express.Router();
const { applyForJob } = require('../controllers/applicationController');

router.post('/apply', applyForJob);

module.exports = router;
