const express = require('express');

const router = express.Router();

// controllers
const { getCarInfo } = require('../controllers/dvla');

// routes
router.post('/get-car-info', getCarInfo);

module.exports = router;
