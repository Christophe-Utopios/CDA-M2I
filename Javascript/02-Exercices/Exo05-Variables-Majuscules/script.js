/*
    Exercice 05
*/

const result = document.querySelector(".result")

let chaine,
    chaineMod,
    affichage

affichage = "<h1>Traitement d'une chaîne de caractères<h1>"

chaine = prompt("Veuillez saisir une chaîne à traiter :")

affichage += `<p>Vous avez saisi : ${chaine}</p>`

affichage += `<p>La chaîne en minuscule : ${chaine.toLowerCase()}</p>`

chaineMod = chaine.toLowerCase().split('')
affichage += `<p>Mise en tableau : ${chaineMod}</p>`

chaineMod = chaine.toLowerCase().split(' ').map(x => x[0].toUpperCase()+x.slice(1)).join(" ")
affichage += `<p>Chaîne après traitement : ${chaineMod}</p>`

result.innerHTML = affichage