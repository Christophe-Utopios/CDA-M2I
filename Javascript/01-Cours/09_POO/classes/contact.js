export class Contact {
    constructor() {
        this.nom = "Toto"
        this.prenom = ""
        this.email = "toto@email.fr"
    }

    toString() {
        return `Je suis ${this.nom}, mon email : ${this.email}`
    }

    get name() {
        return this.nom
    }

    set name(n){
        this.nom = n
    }
}