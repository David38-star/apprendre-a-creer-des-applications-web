var express = require("express");
var app = express();

app.get("/", function (req, res) {
	// La m�thode sendFile() permet d'envoyer au client un fichier. Elle a pour param�tre le chemin de ce fichier
	// __dirname contient toujours le chemin de l'application, on ajoute apr�s le nom du fichier souhait�
	res.sendFile(__dirname + "/chapitre3-formulaire-get.html");
	// On notera que sendFile() se passe de la m�thode end()
});

app.listen(8080);
console.log("Serveur en marche");