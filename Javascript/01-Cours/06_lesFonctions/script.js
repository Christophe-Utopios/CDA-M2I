/*
    Création de fonctions
*/

// Fonction sans paramètres
function hello(){
    console.log("Hello world");
}

//appel de la fonction
hello()
hello()
hello()
hello()

// Fonction avec paramètres
function helloParams(lastname, firstname = "Christophe") {
    console.log(`Hello ${firstname} ${lastname}`);
}

// appel de la fonction avec paramètres
helloParams("Titi")

// Fonction avec return
function helloReturn(firstname) {
    let chaine = `Hello ${firstname}`
    return chaine
}

console.log("------------------");

let result = helloReturn("Toto")

console.log(result);

// let lastname = prompt("Veuillez saisir votre nom :")

// helloParams(lastname)

function tuples(){
    let nb1 = 1,
        nb2 = 2,
        nb3 = 3
    return [nb1, nb2, nb3]
}

let [valeur1,, valeur3] = tuples()

console.log(valeur3);

let sayHi = function () {
    alert("Hello world")
}

console.log(typeof(sayHi));

// Fonctions callback

function salutation (name) {
    alert("Bonjour" + " " + name)
}

function salutationCallback(toto) {
    let name = prompt("Veuillez saisir votre nom")
    toto(name)
}

salutationCallback(salutation)

/*
    Les fonctions fléchées
*/

// Sans paramètres
let cas1 = () => {
    return "Toto"
}

// Avec paramètres
let cas2 = (firstname) => {
    return firstname
}

// Simplification seulement si la fonction ne fait qu'un return
let cas3 = (firstname) => firstname