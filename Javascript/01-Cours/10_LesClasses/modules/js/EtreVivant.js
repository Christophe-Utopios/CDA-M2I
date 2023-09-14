export class EtreVivant {
    constructor(nom, type){
        this.nom = nom
        this.type = type
    }

    Naissance(){
        console.log("Tous les être vivants naissent");
    }

    Respiration(){
        console.log("Tous les êtres vivants respirent");
    }

    Alimentation(){
        console.log("Tous les être vivants s'alimentent");
    }
}