// ENUM

// Le typescript permet la création d'énum, des types permettant de 
// relier des valeurs numériques avec des valeurs en toutes lettres plus utiles pour nous développeur
// Au niveau de la RAM, cela restera seulement des nombres cela dit, donc on gagne en performances

enum STATUS {
    CADRE,
    SALARIE,
    COMMERCIAL,
    BLABLA
  }

let myStatusC = STATUS.CADRE
let myStatusD: STATUS = 2
let myStatusE = STATUS[3]

console.log(myStatusC)
console.log(myStatusD)
console.log(myStatusE)

let myObjectWithEnum = {
    name: "Toto",
    role: STATUS.CADRE,
    isCommercial: function(): boolean { return this.role === STATUS.COMMERCIAL }
}

console.log('mon utilisateur est un commercial ? ' + myObjectWithEnum.isCommercial())

// Type ANY

const myFunction = (arg: any): void => {
    console.log(arg.length);
}

myFunction("Bonjour")
myFunction(3)

// Type Unknown + vérifications
console.log("##### UNKNOWN ######")

let str: unknown;
let strAny: any;
let hello: string = "bonjour";
let myNumber: number = 42;
str = myNumber;
strAny = hello;


//console.log(str.length) // erreur str est de type unknown
console.log("strany "+strAny.length) // aucune erreur
//console.log(typeof str)
console.clear()

if(typeof str == 'string'){
    console.log(str.length) // str est de type string
    console.log(typeof str)
}else {
    console.log(str); // type autre que string
    console.log(typeof str)
}

// VOID

function afficherMessage(): void {
    console.log("Bonjour, monde !");
}

const resultat = afficherMessage(); // resultat est de type void
console.log(typeof resultat); // undefined 

// Type Function

let operation : Function;

operation = function (a: number, b: number): number {
    return a +b;
}

const calcul = operation(5, 3); // resultat est de type number
console.log(calcul); // Affiche 8

//
let operation2: (a: number, b: number) => number;

operation2 = function(a,b) {
    return  a + b;
}

//const calcul = operation2("toto",5); //erreur
const calcul2 = operation2(5,5); // 10

// Parametres falcutatifs

function saluer(nom?: string): void {
    if(nom) {
        console.log(`Bonjour, ${nom} !`)
    }else {
        console.log("Bonjour !")
    }
}

saluer();
saluer("Alice")

// Parametre par défaut 
function multiplier(a: number, b: number = 2): number {
    return a * b;
}

const resultat1 = multiplier(5); // Utilise la valeur par défaut de b (2)
console.log(resultat1); // Affiche 10

// si on transmet undefined la valeur par défaut est utilisé
const resultat1b = multiplier(5,undefined); // Utilise la valeur par défaut de b (2)
console.log(resultat1b); // Affiche 10

const resultat2 = multiplier(5, 3); // Fournit une valeur pour b (3)
console.log(resultat2); // Affiche 15

// Parametres falcutatifs et par défaut
// Attention les parametres falcutatifs son place en dernier
function afficherInfo(nom: string = "Inconnu", age?: number): void {
    if (age !== undefined) {
      console.log(`Nom: ${nom}, Age: ${age}`);
    } else {
      console.log(`Nom: ${nom}`);
    }
}

afficherInfo(); // Affiche "Nom: Inconnu"
afficherInfo("Alice"); // Affiche "Nom: Alice"
afficherInfo("Bob", 30); // Affiche "Nom: Bob, Age: 30"

// Type Assertions
// exemple avec recuperations d'un element HTML
let myTitleHTML = document.querySelector("#title") as HTMLElement
// ou
let myTitleHTML2 =<HTMLElement> document.querySelector("#title"); // angle-bracket
let myTitle = document.querySelector("#title") as HTMLHeadingElement

console.log(myTitleHTML.textContent)
console.log(myTitleHTML2.textContent)
myTitle.textContent = "Fin démo Typescript"

// div
// HTMLDivElement
// p
// HTMLParagraphElement
// button
// HTMLButtonElement
// input
// HTMLInputElement
// img
// HTMLImageElement

//Il existe un type de base appelé HTMLElement qui est une représentation générique de tous les éléments HTML. 
//HTMLElement inclut les propriétés et méthodes de base que l'on retrouve sur tous les éléments HTML.


// Si on a besoin de rcuperer l'event d'un element

function onFormSubmit (event: SubmitEvent){
    event.preventDefault()
}

let monTexte = ""

function onInputChanged(event: InputEvent){
    monTexte = ( <HTMLInputElement> event.target).value
    monTexte = (event.target as HTMLInputElement).value
}



