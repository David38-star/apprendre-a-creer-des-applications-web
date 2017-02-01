// Une cr�ation d'un objet � l'aide d'une fonction. Tr�s utile s'il est n�cessaire de cr�er de nombreux objets semblables

// Une fonction qui cr�e un objet s'appelle un constructeur et commence par convention par une majuscule
function Eleve(prenom, mail, moyenne) {
	this.prenom = prenom;
	this.mail = mail;
	this.moyenne = moyenne;
}

// La cr�ation d'un objet se fait alors en appelant le constructeur, pr�c�d� du mot-clef new
var eleve1 = new Eleve("Bob", "bob@mail.com", 15);
var eleve2 = new Eleve("Alice", "alice@mail.com", 14.5);
