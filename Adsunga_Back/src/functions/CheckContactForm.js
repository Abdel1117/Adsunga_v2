const {check} = require('express-validator');

exports.checkContactForm = [
    check('name')
        .notEmpty()
        .withMessage('Le nom est requis')
        .isLength({min: 2})
        .withMessage('Le nom doit contenir au moins 2 caractères'),

    check('prenom')
        .notEmpty()
        .withMessage('Le prénom est requis')
        .isLength({min: 2})
        .withMessage('Le prénom doit contenir au moins 2 caractères'), 
    check('entreprise')
        .notEmpty()
        .withMessage('Le nom de l\'entreprise est requis')
        .isLength({min: 2})
        .withMessage('Le nom de l\'entreprise doit contenir au moins 2 caractères'),
    check('phone')
        .notEmpty()
        .withMessage('Le numéro de téléphone est requis')
        .isLength({min: 10, max: 10})
        .matches(/^[0-9]+$/)
        .withMessage('Le numéro de téléphone doit contenir uniquement des chiffres et faire 10 chiffres')
        .withMessage('Le numéro de téléphone doit contenir au moins 10 caractères'),
    check('email')
        .notEmpty()
        .withMessage('L\'email est requis')
        .isEmail()
        .withMessage('L\'email doit être valide'),
    check('message')
        .notEmpty()
        .withMessage('Le message est requis')
        .isLength({min: 10})
        .withMessage('Le message doit contenir au moins 10 caractères')
]