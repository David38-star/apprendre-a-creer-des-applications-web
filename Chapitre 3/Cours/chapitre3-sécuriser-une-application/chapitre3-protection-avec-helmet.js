// Il est possible d'ajouter une couche de protection suppl�mentaire � Node.js en utilisant des modules sp�ciaux
// L'un des plus communs est helmet. Il prot�ge automatiquement contre une dizaine de menaces
// Pour en savoir plus sur helmet : https://www.npmjs.com/package/helmet

var express = require("express");

// Chargement du module helmet
var helmet = require("helmet");

var app = express();

// Cette ligne de code suffit pour activer helmet
app.use(helmet());

// Le reste de l'application fonctionne et se programme normalement
app.get("/", function (req, res) {
	res.send("hello");
	res.end();
});

app.listen(8080);
