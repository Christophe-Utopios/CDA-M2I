export default class Contact {
    constructor(titre, nom, prenom, dateNaissance, telephone, email) {
        this.titre = titre;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.telephone = telephone;
        this.email = email;
    }

    toString(){
        return `Titre : ${this.titre} - Nom : ${this.nom} - Prénom : ${this.prenom}`;
    }
}