import { Person, Student } from "./classes/Person.js";
let person;
person = new Person("Albert", "DUPONT", 45, 54545556);
person.firstname = "Toto";
console.log(person.fullname);
console.log(person.numeroIdNat);
console.log(`Il y a actuellement ${Person.count} personnes`);
// un tableau de person
let personArray = [];
personArray.push(person);
let myStudent;
myStudent = new Student("titi", "tata", 45, 545215, true);
console.log(myStudent.toString());
console.log(`Il y a actuellement ${Person.count} personnes`);
