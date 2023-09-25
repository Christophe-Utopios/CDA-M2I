import { Person } from "./classes/Person.js";


let person: Person;

person = new Person("Albert","DUPONT",45,54545556)
person.firstname = "Toto"
console.log(person.fullname)
console.log(person.numeroIdNat)
console.log(`Il y a actuellement ${Person.count} personnes`)