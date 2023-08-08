const express = require('express');
const router = express.Router();

// controllers
const { contactFormEmail } = require('../controllers/contact');

// routes
router.post('/contact-form-email', contactFormEmail);

module.exports = router;
