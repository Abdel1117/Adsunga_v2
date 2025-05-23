const express = require('express');
const nodemaieler = require('nodemailer');
const router = express.Router();
const dotenv = require('dotenv');
const {validationResult} = require('express-validator');

const devisController = require('../controllers/devisController');
const { checkDevisForm } = require('../functions/CheckDevisForm');

dotenv.config();

router.post('/devis', checkDevisForm,  devisController.handleDevisFormSubmission);

module.exports = router;