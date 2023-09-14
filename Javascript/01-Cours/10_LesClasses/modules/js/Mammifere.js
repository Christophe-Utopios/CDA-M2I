import {EtreVivant}  from "./EtreVivant.js";

export class Mammifere extends EtreVivant{
    constructor(nom, type){
        super(nom, type)
        this.alreadyEat
        this.Naissance()
    }

    Naissance(){
        super.Naissance()
        console.log("Naissance après une période de gestation");
        this.alreadyEat = false
    }
}