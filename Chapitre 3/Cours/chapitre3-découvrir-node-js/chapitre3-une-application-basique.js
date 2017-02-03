var express = require("express");
var app = express();

// La m�thode get() permet d'ajouter une route (une page) � une application
app.get("/", function (req, res) {
	// La m�thode send() permet d'envoyer au client du texte, notamment du code HTML
	res.send("<h1>Bonjour!</h1>");
	// Une fois que la r�ponse est faite, on utilise la m�thode end(). La page chargerait sinon ind�finiment
	res.end();
});

// On peut se rendre � l'adresse http://localhost:8080 avec un navigateur pour voir le r�sultat
app.listen(8080);
console.log("Serveur en marche");