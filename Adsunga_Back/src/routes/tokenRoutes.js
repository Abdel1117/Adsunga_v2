const express = require('express');
const dotenv = require('dotenv');
const router = express.Router()

dotenv.config();

const tokenChecker = require("../controllers/tokenController.js")
const refreshToken = require("../controllers/refreshTokenController.js")

router.get("/check", tokenChecker.authenticateToken, (req, res) => {
    res.status(200).json(req.user );
});
router.get("/refreshToken", refreshToken.handleRefresh)


module.exports = router;