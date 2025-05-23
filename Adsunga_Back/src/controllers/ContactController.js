require("dotenv").config();
const { validationResult } = require("express-validator");
const {checkContactForm} = require('../functions/CheckContactForm')
const nodemailer = require("nodemailer");

exports.handleContactFormSubmission = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    /* Const for Email and PAssword  */
    const emailAdsunga = process.env.ADSUNGA_MAIL;
    const passwordAdsunga = process.env.ADSUNGA_MAIL_PASSWORD;
    console.log(emailAdsunga)
    console.log(passwordAdsunga)

    //à Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailAdsunga,
            pass: passwordAdsunga
        }
    });

    // Set up email data
    const {name, prenom, entreprise, phone, email, message} = req.body;
    const mailOptions = {
        from: req.body.email,
        to: emailAdsunga,
        subject: 'Nouveau message de contact',
        text: `Veuillez trouver ci-dessous les informations du formulaire de contact :\n\n` +
              `Nom: ${name}\n` +
              `Prénom: ${prenom}\n` +
              `Entreprise: ${entreprise}\n` +
              `Téléphone: ${phone}\n` +
              `Email: ${email}\n` +
              `Message: ${message}
              Ce message a été envoyé depuis le formulaire de contact de votre site web le ${new Date().toLocaleString()}.`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ message: "Erreur lors de l'envoi du mail" });
        }
        console.log("Email sent:", info.response);
        return res.status(200).json({ message: "Formulaire de contact soumis avec succès" });
    });
}