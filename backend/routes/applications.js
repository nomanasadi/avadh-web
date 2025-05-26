const express = require('express');
const router = express.Router();
const { applyForJob, getAllApplication, getApplicationById } = require('../controllers/applicationController');

router.post('/apply', applyForJob);

router.get('/', getAllApplication);
router.get('/:id', getApplicationById);

module.exports = router;
