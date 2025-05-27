const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const loginController = require('../controllers/loginController');
const checkLoginForm = require('../functions/checkLoginForm');

dotenv.config();

router.post('/login', checkLoginForm,  loginController.handleLogin);

module.exports = router;