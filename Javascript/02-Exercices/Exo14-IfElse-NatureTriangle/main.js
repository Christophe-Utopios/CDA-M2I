/**
 * Exercice14 - IfElse - Quelle est la nature du triangle ABC...?
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Récupération et stockage des saisie utilisateur
var AB = prompt("Veuillez saisir la longeur du segment AB :");
var BC = prompt("Veuillez saisir la longeur du segment BC :");
var CA = prompt("Veuillez saisir la longeur du segment CA :");

// Etablissement Structure If() pour vérifier la nature du triangle
if (AB == BC && BC == CA) {
    resultat = `Le triangle ABC est équilatéral`;
    alert(resultat);
} else if (AB == BC) {
    resultat = `Le triangle est isocèle en B`;
    alert(resultat);
} else if (BC == CA) {
    resultat = `Le triangle est isocèle en C`;
    alert(resultat);
} else if (AB == CA) {
    resultat = `Le triangle est isocèle en A`;
    alert(resultat);
} else {
    resultat = `Ce triangle n'est isocèle ni en A, ni en B, ni en C.`;
    alert(resultat);
}

// Injection du résultat dans l'element HTML .result
result.innerHTML = `${resultat}`;