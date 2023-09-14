import { Contact } from "./classes/contact.js";

let car = {
    model: "308",
    marque: "Peugeot",
    fullName: function () {
        console.log(this.marque + " " + this.model);
    }
}

// console.log(car.marque + " " + car.model);
car.fullName()

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    toString() {
        // return this.age = `${this.age}`
        return `Bonjour je m'apelle ${this.name} et j'ai ${this.age} ans`
    }

    hello() {
        console.log(`Bonjour je suis ${this.name}`);
    }
}

let personne1 = new Person("Pierre", 30)
let personne2 = new Person("Toto", 25)

console.log(personne1.name);
console.log(personne2.name);

personne1.hello()
console.log(personne2.toString())

let monContact = new Contact()

console.log(monContact.nom);
console.log(monContact.toString());

console.log("-------------------");
console.log(monContact.name);

monContact.name = "Tata"
console.log(monContact.name);