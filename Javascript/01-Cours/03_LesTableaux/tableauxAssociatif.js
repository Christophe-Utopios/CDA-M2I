/*
    Les tableaux associatifs (On accède aux éléments via la clé)
*/

// Déclaration d'un tableau associatif
let personne = {
    nom:"Ringot",
    prenom:"Christophe",
    age: 27
}

// Affichage de la valeur associée à une clé
console.log(personne.prenom);
console.log(personne["nom"]);

// Ajouter une clé et un valeur à notre tableau
personne["clé"] = "valeur"

console.table(personne);