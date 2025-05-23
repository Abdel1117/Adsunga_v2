require("dotenv").config();
const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");



exports.handleDevisFormSubmission = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { name, prenom, entreprise, phone, email, service, other,  localisation, date, taille } = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.ADSUNGA_MAIL,
            pass: process.env.ADSUNGA_MAIL_PASSWORD,
        },
    });
    const mailOptions = {
        from: process.env.ADSUNGA_MAIL,
        to: process.env.ADSUNGA_MAIL,
        subject: "Nouvelle demande de devis",
        html: `
            <h1>Nouvelle demande de devis</h1>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Prénom:</strong> ${prenom}</p>
            <p><strong>Entreprise:</strong> ${entreprise}</p>
            <p><strong>Téléphone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Type d'intervention:</strong> ${service}</p>
            <p><strong>Localisation:</strong> ${localisation}</p>
            <p><strong>Date:</strong> ${date}</p>
            ${other ? `<p><strong>Autre:</strong> ${other}</p>` : ""}
            <p><strong>Taille:</strong> ${taille}</p>
        `,
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Demande de devis envoyée avec succès" });
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email:", error);
        res.status(500).json({ error: "Une erreur est survenue lors de l'envoi de l'email" });
    }
}