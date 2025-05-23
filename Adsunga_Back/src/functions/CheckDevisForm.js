const {check} = require("express-validator")


exports.checkDevisForm = [
    check("name")
        .notEmpty()
        .withMessage("Le nom est requis")
        .isLength({ min: 2 })
        .withMessage("Le nom doit contenir au moins 2 caractères"),
    check("prenom")
        .notEmpty()
        .withMessage("Le prénom est requis")
        .isLength({ min: 2 })
        .withMessage("Le prénom doit contenir au moins 2 caractères"),
    check("entreprise")
        .notEmpty()
        .withMessage("Le nom de l'entreprise est requis")
        .isLength({ min: 2 })
        .withMessage("Le nom de l'entreprise doit contenir au moins 2 caractères"),
    check("phone")
        .notEmpty()
        .withMessage("Le numéro de téléphone est requis")
        .isLength({ min: 10, max: 10 })
        .matches(/^[0-9]+$/)
        .withMessage("Le numéro de téléphone doit contenir uniquement des chiffres et faire 10 chiffres")
        .withMessage("Le numéro de téléphone doit contenir au moins 10 caractères"),
    check("email")
        .notEmpty()
        .withMessage("L'email est requis")
        .isEmail()
        .withMessage("L'email doit être valide"),
  check("service")
    .notEmpty()
    .withMessage("Veuillez sélectionner au moins un service")
    .bail()
    .isArray()
    .withMessage("Les services doivent être fournis sous forme de tableau")
    .bail()
    .custom((services) => {
        if (!services.every(s => typeof s === "string" && s.trim().length > 0)) {
            throw new Error("Chaque service doit être une chaîne de caractères non vide");
        }
        return true;
    })
        .withMessage("Veuillez sélectionner au moins un service"),
            
    check("localisation")
        .notEmpty()
        .withMessage("Veuillez renseigner une Ville"),
    check("date")
        .notEmpty()
        .withMessage("Veuillez renseigner une date")
        .isDate()
        .withMessage("Veuillez renseigner une date valide"),
    check("date")
        .custom((value) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const inputDate = new Date(value);
            if (inputDate < today) {
                throw new Error("La date ne peut pas être antérieure à aujourd'hui");
            }
            return true;
        }),
    check("taille")
        .notEmpty()
        .withMessage("Veuillez renseigner une taille")
        .isNumeric()
        .withMessage("La taille doit être un nombre"),
];