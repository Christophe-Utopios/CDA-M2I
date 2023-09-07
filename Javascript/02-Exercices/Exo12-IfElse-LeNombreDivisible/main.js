/**
 * Exercice12 - IfElse - Le nombre est-il divisible par...?
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Déclaration des variables
let resultat="<h2>Le nombre est-il divisible par...?</h2><br>";

// Récupération et stockage des saisie utilisateur
var nb1 = prompt("Veuillez saisir un chiffre/nombre :");
var nb2 = prompt("Veuillez saisir un chiffre/nombre :");

// Etablissement Structure If() pour vérifier si le reste de la division est nul

if (nb1%nb2===0) {
    resultat += `Le nombre <b>${nb1}</b> est divisible par <b>${nb2}</b>`;
} else {
    resultat += `Le nombre <b>${nb1} n'est pas divisible par <b>${nb2}</b>`;
}
// variable pour le résultat = nb1%nb2===0 ? " Reponse si vrai" : " Réponse si faux ";

// Sugar Syntaxe
resultat += nb1%nb2===0? 
    `<br>Le nombre <b>${nb1}</b> est divisible par <b>${nb2}</b>`
    :
    `<br>Le nombre <b>${nb1}</b> n'est pas divisible par <b>${nb2}</b>`

// Injection du résultat dans l'element HTML .result
result.innerHTML = resultat;