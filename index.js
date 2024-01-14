const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const redis = require("redis");
const mysql = require("mysql2/promise"); // Utilisation de mysql2/promise pour tirer parti des promesses


const app = express();
app.use(express.json()); // Middleware pour analyser le corps de la requête au format JSON
app.use(bodyParser.urlencoded({ extended: true })); // Middleware pour analyser les données de formulaire
const port = process.env.PORT || 5000;




app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
