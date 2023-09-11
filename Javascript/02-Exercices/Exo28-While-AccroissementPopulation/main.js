/**
 * EXERCICE 28 - FOR - Accroissement Population
 */

// Déclaration variables
let nbhabitant = 96809,
    date = 2015,
    nbAnnee = 0,
    taux = 0.89,
    affichage = `<h2>Accroissement de la population de Tourcoing</h2>
                <p>En <b>${date}</b>, il a été recensé <b>${nbhabitant} habitants</b>.
                le taux d'accroissement de la population étant de <b>${taux}%</b>.
                Combiens faudra-t-il d'années pour atteindre une population de
                <b>120.000 habitants</b> ?
                </p><hr>`;

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

while (nbhabitant < 120000) {
    nbhabitant += nbhabitant * (taux / 100);
    affichage += `En <b>${++date}</b>, il y aura <b>${Math.round(nbhabitant)} habitants</b><hr>`;
    nbAnnee++;
}
affichage += `<p>Avec un taux d'accroissement de la population de <b>${taux}%</b>,
         en <b>${date}</b>, il y aura <b>${Math.round(nbhabitant)} habitants</b> dans la ville de <b>Tourcoing</b>.
         Il aura fallu <b>${nbAnnee} années</b>.`;
// Injection du résultat dans l'element HTML .result
result.innerHTML = affichage;