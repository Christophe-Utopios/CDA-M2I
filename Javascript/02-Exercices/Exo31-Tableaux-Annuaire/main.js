/**
 * EXERCICE31 - TABLEAUX - Annuaire
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');
const tableau = document.querySelector('#tableau');


// Création d'un tableau de personne à deux dimensions
var annuaire = [
    {
        nom: "Dupont",
        prenom: "Jean",
        age: 15
    },
    {
        nom: "Durant",
        prenom: "Pierre",
        age: 16
    },
    {
        nom: "Martin",
        prenom: "Jean",
        age: 17
    }
];


// Itération de mon tableau et injection dans l'element du DOM #tableau
for(let contact of annuaire){
    tableau.innerHTML += `
    <tr>
        <td>${contact.prenom}</td>
        <td>${contact.nom}</td>
        <td>${contact.age}</td>
    </tr>
    `
}


// Injection du résultat dans l'element HTML .result
result.innerHTML = `<br>
<p>La personne à la 2eme position est
<b>${annuaire[1].prenom} ${annuaire[1].nom}</b></p>
`;