// Une fonction JavaScript basique, cr��e par le programmeur
// Les fonctions sont un objet central de JavaScript, leur documentation est accessible ici : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

// Une fonction est cr��e par l'utilisation de l'instruction function, suivie du nom de cette fonction et de ses �ventuels param�tres.
function ma_fonction(a, b) {
	var calcul = a * b + 1;// Les instructions sont plac�es entre accolades
	return calcul;// Le mot-clef return permet � une fonction de renvoyer un r�sultat
}

console.log(ma_fonction(5, 18));