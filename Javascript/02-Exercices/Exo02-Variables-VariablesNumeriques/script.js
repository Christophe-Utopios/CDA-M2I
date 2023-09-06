/*
    Exercice 02
*/

const result = document.querySelector(".result")

// Déclaration variables
let nb1,
    nb2,
    resultat,
    affichage

nb1 = Number(prompt("Saisir le premier nombre :"))
affichage = `<p>Vous avez saisi ${nb1}</p>`
nb2 = Number(prompt("Saisir le deuxième nombre :"))
affichage += `<p>Vous avez saisi ${nb2}</p>`

resultat = nb1 + nb2

affichage += `<p>La somme de ${nb1} et ${nb2} est de ${resultat}</p>`

result.innerHTML = affichage