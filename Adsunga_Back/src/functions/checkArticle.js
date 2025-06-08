const {check} = require('express-validator');


exports.checkArticle = [
    check('title')
        .notEmpty()
        .withMessage('Le titre est requis')
        .isLength({min: 2})
        .withMessage('Le titre doit contenir au moins 2 caractères'),

    check('content')
        .notEmpty()
        .withMessage('Le contenu est requis')
        .isLength({min: 10})
        .withMessage('Le contenu doit contenir au moins 10 caractères'),
];