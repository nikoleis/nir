// métier
function computation(nir13) {
	return (97 - nir13 % 97);
}
function checkNir13(nir13) {
	// todo...
	// Ajouter un traintement pour la Corse
	if (parseInt(nir13) < 1000000000000 ||
		parseInt(nir13) >= 3000000000000)
		return false;
	return true;
}
// event
function onClickDisplayCode2() {
	let nir13 = document.getElementById("nir13").value;
	let key2 = "";
	if (checkNir13(nir13)) 
		key2 = computation(nir13);
	else 
		alert ("Erreur saisie!!");
	document.getElementById("code2").value=key2;
}

// main
btn = document.getElementById("btn");
btn.addEventListener ("click", onClickDisplayCode2);

// vu par Cathy pour Nico