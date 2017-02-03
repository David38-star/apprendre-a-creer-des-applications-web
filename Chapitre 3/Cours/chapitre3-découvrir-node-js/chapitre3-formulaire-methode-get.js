// R�ception de donn�es envoy�es � l'aide de la m�thode GET

var express = require("express");
var app = express();

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/chapitre3-formulaire-get.html");
});

// Il faut une route dont le nom est identique � la valeur de l'attribut action du formulaire
app.get("/recherche", function (req, res) {

	// On stocke les donn�es re�ues dans une variable (ici celle de la balise qui a un attribut 'nom')
	// L'objet req repr�sente la requ�te, dont on lit le contenu avec les propri�t�s query et nom
	var data = req.query.nom;
	
	res.send("<h1> Vous avez tap� " + data +"</h1>");
	res.end();
});

app.listen(8080);
console.log("Serveur en marche");