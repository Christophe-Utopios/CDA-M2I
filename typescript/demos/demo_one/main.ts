console.log("Bases TypeScript")

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
let firstname: string;
firstname = "Christophe"
//firstname = 45 //Type 'number' is not assignable to type 'string'
//let age: number = "toto"; // erreur
let age: number = 45; // force le bon type
let present:boolean = true;

// Via le typescript on a une auto-completion et une intellisence plus poussée
console.log("nombre de lettre dans "+firstname+ " " + firstname.length);

// Conaitre le type d'une variable avec typeof
console.log("type de la variable firstname : "+ typeof firstname)
console.log("type de la variable age : "+ typeof age)
console.log("type de la variable present : "+ typeof present)

let ageString: string = age.toString();
let presentString: string = present.toString();

console.log(ageString+ " " + typeof ageString)
console.log(presentString+ " " + typeof presentString)

let message: string =`
Bonjour ${firstname}
Vous avez ${age} ans.
Vous etes ${present? "présent" : "absent"}
`

console.log(message)

// Pour la création de fonction en TS , la difference est l'ajout du typage pour les parametres
// De la sorte on sécurise les utilisations futures de notre fonction en vérouillant des types incorrects

function addition(a: number,b: number): number{
    return a + b
}

function multiply(a: number,b: number): number{
    return a * b
}

function logMessage(message: string): void {
    console.log(message)
}

let result: number = addition(1,2)
console.log("resultat de 1 + 2 = "+result)

//let resultB = multiply("A","B") // ne marche pas

// Array

// Pour définir un tableau de number , il faut utiliser le type suivi des crochets
let numbers: number[] = [1,2,3,4]
// ou
let numbers2: Array<number> = [1,2,3,4]

//numbers.push("toto") // erreur
numbers.push(5)
console.log(numbers)
console.table(numbers2)

// Dans un tableau array de type any on peut mettre ce que l'on veut

let tab: any[];

// On peux declarer qui contient plusieurs types alors tous ces types peuvent etres present dans le tableau