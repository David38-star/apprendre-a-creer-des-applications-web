// Exercice 4, chapitre 5 : un formulaire de connexion s�curis�, c�t� serveur
// Ce formulaire n'est PAS s�curis� tant que HTTPS et des modules comme helmet ne sont pas impl�ment�s

// Chargement du module crypto
var crypto = require("crypto");

// Chargement des modules body-parser, express et conenxion � la base de donn�es
var bodyParser = require("body-parser");
var express = require("express");
var mongodb = require("mongolab-provider")
	.init("ma_base", "clef_API");

// Cr�ation d'une fonction hachage, qui cr�e un hash en fonction du texte et de la clef re�ue
function hachage(texte, clef) {
	var hash = crypto.createHmac("sha512", clef)
		.update(texte)
		.digest("hex");

	return hash;
}

// Cr�ation de l'application
var app = express();
// Notre clef secr�te
var clef = "exo_4";

// La page d'accueil (cr�ation d'un utilisateur)
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/nouveau.html");
});

// La page de login (utilisateur d�j� existant)
app.get("/login", function (req, res) {
	res.sendFile(__dirname + "/login.html");
});

// Analyse d'une requ�te de cr�ation d'utilisateur
app.post("/nouveau", function (req, res) {
	
	// Un objet JSON qui repr�sente un utilisateur
	var user = {
		id : req.body.id,
		mdp : hachage(req.body.mdp, clef)
	};
	
	// Ajout � la base de donn�es
	mongodb.insert("ex-4", user);

	res.redirect("/login");
});

// Analyse d'une requ�te de connexion d'un utilisateur d�j� existant
app.post("/login", function (req, res) {
	
	// On recherchera d'abord l'identifiant de l'utilisateur
	var params = {
		where : {
			id : req.body.id
		}
	};

	mongodb.documents("ex-4", params, function (err, obj) {
		if (hachage(req.body.mdp, clef) === obj[0]["mdp"]) {
			res.send("OK");
			res.end();
		} else {
			res.send("Acc�s refus�");
			res.end();
		}

	});

});

app.listen(8080);
