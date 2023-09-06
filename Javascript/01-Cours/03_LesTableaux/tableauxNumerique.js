/*
    Les tableaux numériques (On accède aux éléments via l'index)
*/

// Déclaration d'un tableau
let monTableau = []
// let monTableau = new Array() <---- équivalent

monTableau[0] = "Pomme" // Affectation d'une valeur à l'index 0 du tableau
monTableau[1] = "Poire" // Affectation d'une valeur à l'index 1 du tableau

console.log(monTableau);
console.table(monTableau);
console.log(monTableau[1]);

let legumes = ["Carottes", "Choux", "Haricots"]
console.log(legumes[2]);
legumes[2] = "épinards"
console.log(legumes[2]);

let nbLegumes = legumes.length
console.log(`Mon tableau contient ${nbLegumes} légumes`);

// Insertion dans le dernier index
legumes[legumes.length] = "Haricots"
console.table(legumes);

// legumes.push("Haricots") ---> équivalent

// Retirer le dernier élément d'un tableau 
legumes.pop()

// Retirer le premier élément d'un tableau
legumes.shift()

console.table(legumes);