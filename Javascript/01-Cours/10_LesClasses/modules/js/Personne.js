import { Mammifere } from "./Mammifere.js";

export class Personne extends Mammifere {
    constructor(nom, prenom){
        super(nom, "Humain")
        this.prenom = prenom
    }
}