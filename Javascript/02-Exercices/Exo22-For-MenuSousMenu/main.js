/**
 * EXERCICE22 - Boucle For - Menus et Sous-Menus
 */
// Déclaration variables
var Affichage="<h2>Menu et Sous-Menu</h2>";

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

for(var i = 1 ; i <= 3 ; i ++){
    Affichage +=`<div class="tab-1">Chapitre <b>${i}</b></div>`;
    for(var j = 1 ; j <= 3; j++ ){
    Affichage +=`<div class="tab-5">-Partie <b>${i}.${j}</b></div>`;
    }
}

// Injection du résultat dans l'element HTML .result
result.innerHTML = Affichage;