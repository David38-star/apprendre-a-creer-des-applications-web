// L'objet Date permet d'obtenir la date actuelle et de la manipuler
// Documentation compl�te : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Date contient par d�faut la date actuelle
var ajd = new Date();

// Il est possible de stocker une date pass�e (ici, le 25 avril 1994)
var date = new Date(1994, 3, 25);

// Calcul d'une diff�rence entre deux dates, exprim�e en milliseconde (conversion ici en ann�e)
console.log((date - ajd) / (1000 * 60 * 60 * 24 * 30 * 12));
