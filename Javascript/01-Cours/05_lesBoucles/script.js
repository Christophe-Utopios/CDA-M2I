/*
    Les boucles
*/

// Boucle Tant que ... (while)

let i = 1

while (i <= 10) {
    console.log(`La boucle while s'est exécutée ${i} fois`);
    i++
}

// Boucle Faire tant que ... (do while)

let n = 1

do{
    console.log(`La boucle do while s'est exécutée ${i} fois`);
    n++
} while (n <= 10)

// boucle for

for (let k = 0; k < 10; k++){
    console.log(`La boucle for s'est exécutée ${i} fois`);
}

// break

for (let i = 1; i <= 10; i++){
    if (i === 5) {
        break
    }
    console.log(i);
} // Cela affichera les chiffres de 1 à 4

// Continue

for (let i = 1; i <= 10; i++){
    if (i === 5) {
        continue
    }
    console.log(i);
} // Cela affichera 1 2 3 4 6 7 8 9 10


let numbers = [1,2,3,4,5,6,7]

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// For ... of

for(let number of numbers) {
    console.log(number);
}

// forEach

numbers.forEach(number => {
    console.log(number);
});

// For ... In
let fruit = {
    nom: "Banane",
    prix: 1.05,
    couleur: "jaune"
}

for (let key in fruit){
    console.log(key + " : " + fruit[key]);
}
