/*
    Exercice 01
*/

const result = document.querySelector(".result")

// Déclaration des variables
let prenom,
    nom,
    affichage,
    resultat

affichage = "<h3>Addition de deux variables type chaîne<h3>"

prenom = prompt("Saisir votre prénom :")
affichage += `<p>Vous avez saisi : ${prenom}</p>`
nom = prompt("Saisir votre nom :")
affichage += `<p>Vous avez saisi : ${nom}</p>`

resultat = `${prenom} ${nom}`

affichage += `<p>Bonjour ${resultat}</p>`

result.innerHTML = affichage