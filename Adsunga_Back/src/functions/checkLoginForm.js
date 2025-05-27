const {check} = require("express-validator")

const checkLoginForm = [
    check("email").isEmail().withMessage("Le format de l'email est invalide"),
    check("password").isLength({ min: 6 }).withMessage("Le mot de passe doit contenir au moins 6 caractères"),
]

module.exports = checkLoginForm
