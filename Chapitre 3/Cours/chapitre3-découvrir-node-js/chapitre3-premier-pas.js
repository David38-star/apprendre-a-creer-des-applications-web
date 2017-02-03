// Une application minimaliste pour d�couvrir Node.js
// Pour la faire fonctionner, il faut d'abord avoir install� Express
// La commande node chapitre3-premier-pas permet de la d�marrer
 
// Chargement du module Express
var express = require("express");

// Cr�ation d'un objet qui repr�sente notre application
var app = express();

// D�marrage du serveur � l'adresse http://localhost:8080
app.listen(8080);

// On affiche un message pour indiquer que tout s'est bien pass�
console.log("Serveur en marche");