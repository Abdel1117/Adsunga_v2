require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes.js");
const devisRoutes = require("./routes/devisRoutes.js");
const loginRoutes = require("./routes/loginRoutes.js");
const tokenRoutes = require("./routes/tokenRoutes.js")
const articlesRoutes = require("./routes/articlesRoute.js");
const app = express();
const PORT = process.env.PORT || 4000;

// Connexion à la base de données
connectDB();

/* Configuration de la taille maximale des requêtes */
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

// Middleware
app.use(express.json());
app.use(cors("*"));


app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use('/api/uploads', express.static('uploads')); // Pour servir les fichiers statiques (images, etc.)
// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/devis", devisRoutes)
app.use('/api/login', loginRoutes);
app.use("/api/token", tokenRoutes)
app.use('/api/articles', articlesRoutes);
app.use("*", (req, res)=>{
    console.log("Hello from Adsunga Back");
})
app.listen(PORT,"0.0.0.0", () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
