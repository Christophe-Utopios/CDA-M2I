/**
 * EXERCICE27 - For...Of - ETUDIANTS NOTES
 */

// DOM
const result = document.querySelector('.result');

// Déclaration d'un tableau d'étudiants contenant 2 étudiants
let etudiants = [
    {
        prenom: "José",
        nom: "Garcia",
        matieres: {
            Francais: 16,
            Anglais: 7,
            Humour: 14
        }
    },
    {
        prenom: "Antoine",
        nom: "De Caunes",
        matieres: {
            Francais: 15,
            Anglais: 6,
            Humour: 16,
            Informatique: 4,
            Sport: 10
        }
    }
];

// Déclaration des variables
let total, nbNotes, moyenne, affichage="<h2>Notes des étudiants</h2><br>";

result.innerHTML=affichage;


// Parcour du tableau 2 dimensions Etudiants
for (let etudiant of etudiants) {
    // 1
    affichage = "";
    affichage += "<p><b>" + etudiant.prenom + " " + etudiant.nom + "</b></p><ul>";
    // Initialisation pour chaque étudiant du total et du nombre de notes
    total = 0;
    nbNotes = 0;

    // 2 - Boucle qui permet de parcourir toutes les matières pour chaque étudiant
    for (let key in etudiant.matieres) {
        affichage += "<li>" + key + " : <b>" + etudiant.matieres[key] + "/20</b></li>";

        // 3.a Total des notes d'un étudiant
        total += etudiant.matieres[key];
        nbNotes++;
    }
    // 3 - Calcul de la moyenne
    moyenne = total / nbNotes;
    affichage += "</ul><br>Moyenne générale : <b>" + Math.round((moyenne) * 10) / 10 + "/20</b><br><hr>";
    result.innerHTML += affichage;
}

