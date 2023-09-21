"use strict";
console.log("Bases TypeScript");
// Inference (typescript le fait pour nous)
let test; // type any
test = true;
test = "true";
test = 42;
let monPrenom = "Christophe"; // type string
let monAge = 35; // type number
let isPresent = true; // type boolean
// je peux reasigne des valeurs uniquement du meme type
monPrenom = "true";
//monPrenom = 45 // Type 'number' is not assignable to type 'string'
monAge = 45;
isPresent = false;
//isPresent ="True" //Type 'string' is not assignable to type 'boolean'.
// Assignation (on donne nous meme le type)
// Pour spécifier le type d'une variable, la syntaxe est la suivante 
let firstname;
firstname = "Christophe";
//firstname = 45 //Type 'number' is not assignable to type 'string'
//let age: number = "toto"; // erreur
let age = 45; // force le bon type
let present = true;
// Via le typescript on a une auto-completion et une intellisence plus poussée
console.log("nombre de lettre dans " + firstname + " " + firstname.length);
// Conaitre le type d'une variable avec typeof
console.log("type de la variable firstname : " + typeof firstname);
console.log("type de la variable age : " + typeof age);
console.log("type de la variable present : " + typeof present);
let ageString = age.toString();
let presentString = present.toString();
console.log(ageString + " " + typeof ageString);
console.log(presentString + " " + typeof presentString);
let message = `
Bonjour ${firstname}
Vous avez ${age} ans.
Vous etes ${present ? "présent" : "absent"}
`;
console.log(message);
// Pour la création de fonction en TS , la difference est l'ajout du typage pour les parametres
// De la sorte on sécurise les utilisations futures de notre fonction en vérouillant des types incorrects
function addition(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function logMessage(message) {
    console.log(message);
}
let result = addition(1, 2);
console.log("resultat de 1 + 2 = " + result);
//let resultB = multiply("A","B") // ne marche pas
