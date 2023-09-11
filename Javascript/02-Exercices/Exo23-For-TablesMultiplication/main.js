/**
 * EXERCICE23 - Boucle For - Tables de multiplication
 */

// Déclaration variables
var Affichage = '<h2>Tables de multiplication</h2>'

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result')

for (var i = 1; i <= 10; i++) {
  Affichage += `<div class="card"><h5>Table de <b>${i}</b></h5><ul>`

  for (var j = 1; j <= 10; j++) {
    Affichage += `<li class="tab-25">${i} x ${j} = <b>${i*j}</b></li>`
  }
  Affichage += `</ul></div>`
}

// Injection du résultat dans l'element HTML .result
result.innerHTML = Affichage;
