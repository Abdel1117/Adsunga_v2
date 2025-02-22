require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à la base de données
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", routes);

app.listen(PORT, () => console.log(`Serveur démarré ssur http://localhost:${PORT}`));
