/**
 * Exercice 21 - FOR - Compter à 10
 */
// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Déclaration variables
var Affichage="<h2>Compter jusqu'à 10</h2><br><ul>";

// Mise en place d'une boucle For pour compter à 10
for(var i = 1 ; i < 11 ; i++){
    Affichage +=`<li>${i}</li>`;
}

Affichage += "</ul><br/><p><b>Super, je sais compter jusqu'à 10!</b></p>";


// Injection du résultat dans l'element HTML .result
result.innerHTML = Affichage;