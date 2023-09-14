export class Vehicule {
    constructor(marque, modele, kilometrage, annee){
        this.marque = marque
        this.modele = modele
        this.kilometrage = kilometrage
        this.annee = annee
    }

    display(){
        return `${this.marque} - ${this.modele} - ${this.kilometrage}Km - ${this.annee}`
    }
}