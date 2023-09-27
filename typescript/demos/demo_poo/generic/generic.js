"use strict";
// Generic
function getLength(array) {
    return array.length;
}
const nombres = [1, 2, 3, 4];
getLength(nombres);
const lettres = ["1", "2", "3", 4];
getLength(lettres);
class NomDeClasse {
    constructor(monAttribut) {
        this.monAttribut = monAttribut;
    }
}
let monObjet;
monObjet = new NomDeClasse("42");
let monObjet2;
monObjet2 = new NomDeClasse(42);
