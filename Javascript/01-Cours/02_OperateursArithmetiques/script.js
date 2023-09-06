/*
    Les opérateurs arithmétiques
*/

let nb1 = 10, nb2 = 65, resultat

// L'addition
resultat = nb1 + nb2
console.log(resultat);
console.log(`${nb1} + ${nb2} = ${resultat}`);

// La soustraction
resultat = nb1 - nb2
console.log(`${nb1} - ${nb2} = ${resultat}`);

// Les multiplications
resultat = nb1 * nb2
console.log(`${nb1} x ${nb2} = ${resultat}`);

// Division
resultat = nb1 / nb2
console.log(`${nb1} / ${nb2} = ${resultat}`);

// Modulo (reste de la division)
resultat = nb1 % nb2
console.log(`${nb1} % ${nb2} = ${resultat}`);

console.log("Les opérateurs d'incrémentation/décrémentation");

// Incrémentation
nb1 = nb1 + 1 // Incrémentation classique
console.log(nb1);
nb1 += 1 // Opérateur combiné +=
console.log(nb1);
nb1++ // Opérateur d'incrémentation
console.log(nb1);

// Décrémentation
nb1 = nb1 - 1
console.log(nb1);
nb1 -= 1
console.log(nb1);
nb1--
console.log(nb1);

console.log("----------------");

// Incrémentation puis lecture de la valeur
console.log(++nb1);
// Lecture de la valeur puis incrémentation
console.log(nb1++);

// Multiplication combinée
console.log(nb2 *= nb1);
// Division combinée
console.log(nb2 /= nb1);