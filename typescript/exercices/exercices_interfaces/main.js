"use strict";
console.log("Exercice Interface");
const personnes = [
    {
        nom: 'Toto Dupont',
        age: 35,
        occupation: 'Facteur'
    },
    {
        nom: 'Jeanne Doe',
        age: 25,
        role: 'Admin',
    },
    {
        nom: 'Michel Michel',
        age: 23,
        occupation: 'Lutteur'
    },
    {
        nom: 'Michael Flinch',
        age: 64,
        role: 'Facteur'
    }
];
// 4. Afficher le nom et l'âge de chacune des ces personnes
personnes.forEach(personne => console.log(`${personne.nom} ${personne.age}`));
// bonus
personnes.forEach(personne => {
    console.log(`${personne.nom} ${personne.age}`);
    let bonus = ("occupation" in personne) ? "Son occupation est : " + personne.occupation : "Son role est : " + personne.role;
    console.log(bonus);
});
