// Cr�ation d'une application Node.js qui utilise le protocole HTTPS (version s�curis�e du HTTP)
// Ce protocole repose sur un syst�me d'�change de clefs (ou certificats). Pour en savoir plus : https://en.wikipedia.org/wiki/HTTPS
// Il est possible de cr�er des certificats pour un usage p�dagogique sur le site : http://www.mobilefish.com/services/ssl_certificates/ssl_certificates.php
// Les certificats utilis�s ici ne doivent EN AUCUN CAS �tre utilis�s en production

// L'impl�mentation du HTTPS se fait � l'aide du module �ponyme. Le module fs est utilis� pour lire les clefs
var fs = require("fs");
var https = require("https");

// Cr�ation d'une application avec Express
var express = require("express");
var app = express();

app.get("/", function (req, res) {
	res.send("<h1>S�curis�</h1>");
});

// Un objet JSON qui contient l'emplacement des certificats. Ils sont lus � l'aide de la m�thode readFileSync du module fs
var https_options = {
	key : fs.readFileSync("cert/private.pem"),
	cert : fs.readFileSync("cert/public.pem")
};

// Mise en place d'un serveur qui utilise les certificats. 
var server = https.createServer(https_options, app).listen(443);
//L'application est accessible � l'adresse https://localhost:443 (port typique du HTTPS)