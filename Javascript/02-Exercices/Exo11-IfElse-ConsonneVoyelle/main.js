/**
 * Exercice11 - IfElse - Consonne...? Voyelle...?
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');
let resultat

// Récupération et stockage des saisie utilisateur
let userLetter = prompt("Veuillez saisir une lettre");
userLetter = userLetter.toUpperCase()

// // Etablissement Structure If() pour vérifier la saisie utilisateur
// if (userLetter == "A" ||
//     userLetter == "E" ||
//     userLetter == "I" ||
//     userLetter == "O" ||
//     userLetter == "U" ||
//     userLetter == "Y") {
//     resultat = `La lettre ${userLetter} est une voyelle`;
//     alert(resultat);
// } else {
//     resultat = `La lettre ${userLetter} est une consonne`;
//     alert(resultat);
// }

// Etablissement Structure If() pour vérifier la saisie utilisateur (Avec Liste Voyelle)
const voyelle = ["A","E","I","O","U","Y"];
if (voyelle.includes(userLetter)) {
    resultat = `La lettre ${userLetter} est une voyelle`;
} else {
    resultat = `La lettre ${userLetter} est une consonne`;
}

// Injection du résultat dans l'element HTML .result
result.textContent = `${resultat}`;