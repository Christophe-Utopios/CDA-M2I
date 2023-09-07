/*
    Les structures conditionnelles
*/

let compte = 300

if (compte > 0) {
    console.log("Votre compte est créditeur");
}

if (compte < 0) {
    console.log("Votre compte est débiteur");
}


if (compte >= 0) {
    console.log("Votre compte est créditeur");
} else {
    console.log("Votre compte est débiteur");
}

// Avec sinon ... si

if (compte > 0) {
    console.log("Votre compte est créditeur");
} else if (compte == 0) {
    console.log("Votre compte est à 0");
} else {
    console.log("Votre compte est débiteur");
}

let estVrai = false

if(estVrai){
    console.log("C'est vrai");
} else {
    console.log("C'est faux");
}

console.log(1 === 1); // Vrai
console.log("1" === 1); // Faux
console.log(1 == 1); // Vrai
console.log("1" == 1); // Vrai
console.log("1" != 1); // Faux
console.log(3 !== 3); // Faux
console.log(4 !== 3); // Vrai