require("dotenv").config();
const { validationResult } = require("express-validator");
const User = require("../models/userSchema"); // Assuming you have a User model defined
const jwt = require('jsonwebtoken');
const AUTH_TOKEN_CODE = process.env.AUTH_TOKEN_CODE
const REFRESH_TOKEN_CODE = process.env.REFRESH_TOKEN_CODE
const bcrypt = require("bcrypt");

exports.handleLogin = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Retrieve email and password from request body
    const { email, password } = req.body;
    // Here you would typically check the credentials against your database
    // For demonstration purposes, we'll assume a successful login if email and password match a specific value
   User.findOne({ email: email })
        .then(user => {
            if (!user) {
                console.log("User not found");
                return res.status(401).json({ message: "Email ou mot de passe incorrect" });
            }

            // Compare the provided password with the stored hashed password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.log("Error comparing passwords:", err);
                    return res.status(500).json({ message: "Email ou mot de passe incorrect" });
                }
                if (!isMatch) {
                    console.log("Password does not match");
                    return res.status(401).json({ message: "Email ou mot de passe incorrect" });
                }

                // Generate JWT token
                const token = jwt.sign({ userId: user._id }, AUTH_TOKEN_CODE, { expiresIn: '1h' });
                const refreshToken = jwt.sign({ userId: user._id }, REFRESH_TOKEN_CODE, { expiresIn: '7d' });

                // Return the token and user information
                return res.status(200).json({
                    message: "Connexion réussie",
                    token,
                    refreshToken,
                    user: {
                        id: user._id,
                        email: user.email,
                    }
                });
            });
        })
        .catch(err => {
            console.error("Error during login:", err);
            return res.status(500).json({ message: "Erreur lors de la connexion" });
        });
}



