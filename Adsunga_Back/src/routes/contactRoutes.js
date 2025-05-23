const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

const Contactcontroller = require('../controllers/ContactController');

const { checkContactForm } = require('../functions/CheckContactForm');
dotenv.config();

router.post('/contact', checkContactForm,  Contactcontroller.handleContactFormSubmission);

module.exports = router;