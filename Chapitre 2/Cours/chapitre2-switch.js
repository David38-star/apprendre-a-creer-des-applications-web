// L'instruction switch est utile pour effectuer plusieurs tests de condition sur une seule variable

var a = 0;

switch (a) {
case 0:
	console.log("La variable vaut z�ro ");
	break;// Break stoppe le test
case 1:
	console.log("La variable vaut un");
	break;
default:// Instruction qui est ex�cut�e si la variable n'a pas v�rifi�e les conditions pr�c�dentes
	console.log("La variable ne vaut ni z�ro, ni un");
}
