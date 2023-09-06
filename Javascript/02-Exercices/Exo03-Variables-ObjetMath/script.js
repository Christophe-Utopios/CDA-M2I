/*
    Exercice 03
*/

const result = document.querySelector(".result")

let diametre,
    perimetre,
    aire,
    resultat,
    affichage


const pi = Math.PI

diametre = Number(prompt("Veuillez saisir le diamètre du cercle"))
perimetre = diametre * pi
aire = pi*Math.pow((diametre/2),2)

affichage = `<h3>Diamètre = ${diametre} cm</h3>
<h3>Perimètre = ${perimetre} cm</h3>
<h3>Aire = ${aire} cm²</h3>
<h3>perimètre arrondi = ${Math.round(perimetre)} cm</h3>
<h3>Aire arrondi = ${Math.round(aire)} cm²</h3>`

result.innerHTML = affichage