require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const devisRoutes = require("./routes/devisRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à la base de données
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/devis", devisRoutes)

app.listen(PORT, () => console.log(`Serveur démarré ssur http://localhost:${PORT}`));
