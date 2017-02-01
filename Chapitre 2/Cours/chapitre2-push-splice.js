// Deux m�thodes de l'objet Array : push et splice
// Documentation compl�te de push : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push
// Documentation compl�te de splice : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice

var tableau = [10, 25, 35];

// Push prend pour param�tre un ou plusieurs �l�ments et les ajoute au tableau
tableau.push(12);

// Ici, splice retire le deuxi�me �l�ment du tableau
tableau.splice(1, 1);

//Affichera [10, 35, 12]
console.log(tableau);
