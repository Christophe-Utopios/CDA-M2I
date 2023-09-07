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

/*
    Opérateur logique && => ET
    Operateur logique || => OU
    Operateur logique ! => contraire de ...
*/

console.log(1 === 1); // Vrai
console.log("1" === 1); // Faux
console.log(1 == 1); // Vrai
console.log("1" == 1); // Vrai
console.log("1" != 1); // Faux
console.log(3 !== 3); // Faux
console.log(4 !== 3); // Vrai

/*
        switch case

        switch (condition){
            case valeur1:
                // instructions
                break;
            case valeur2:
                // instructions
                break;
            default:
                // Instructions
                break;
        }
*/

let fruit = "Banane"

switch (fruit) {
    case "Oranges":
        console.log("Les oranges sont à 2 euros");
        break
    case "Banane":
        console.log("Les bananes sont à 1 euro");
        break
    default:
        console.log("Votre fruit n'existe pas !");
}

// Switch avec range de valeurs

let age = 3

switch (age) {
    case age <= 6:
        console.log("Votre enfant est dans la catégorie 'BABY'");
        break;
    case age <= 8:
        console.log(`Votre enfant est dans la catégorie "Poussin"`);
        break;
    case age <= 10:
        console.log(`Votre enfant est dans la catégorie "Pupille"`);
        break;
    case age <= 12:
        console.log(`Votre enfant est dans la catégorie "Minime"`);
        break
    default:
        console.log(`Votre enfant est dans la catégorie "Cadet"`);
        break
}