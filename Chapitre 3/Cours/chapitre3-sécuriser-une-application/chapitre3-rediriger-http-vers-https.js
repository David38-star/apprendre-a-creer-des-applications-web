// Par d�faut, les navigateurs tentent souvent de se connecter � une application en utilisant HTTP et non HTTPS
// Une technique courante est alors de ridiriger toutes les requ�tes HTTP vers l'application s�curis�e
// Pour y parvenir, il faut cr�er deux applications : une "vraie", s�curis�e et qui utilise HTTPS et une seconde, dont le r�le est simplement de rediriger les connexions vers la premi�re

var fs = require("fs");
var https = require("https");
var express = require("express");

// La premi�re application, qui fonctionnera sur le port 443 (HTTPS)
var app = express();

app.get("/", function (req, res) {
	res.send("<h1>S�curis�</h1>");
});

// La seonde application, qui fonctionnera sur le port 8080 (HTTP)
var httpApp = express();

// L'application HTTP a pour seul r�le de rediriger les requ�tes vers la premi�re
httpApp.get("/", function (req, res) {
	// On utilise ici le code de r�ponse 301 pour effectuer la redirection (Moved Permanently)
	res.writeHead(301, {
		Location: "https://localhost:443" + req.url
	});
	res.end();
});

var https_options = {
	key: fs.readFileSync("cert/private.pem"),
	cert: fs.readFileSync("cert/public.pem")
};

// D�marrage de l'application non-s�curis�e sur le port 8080
httpApp.listen(8080);
// Cr�ation du serveur qui fonctionne avec HTTPS
var server = https.createServer(https_options, app).listen(443);
