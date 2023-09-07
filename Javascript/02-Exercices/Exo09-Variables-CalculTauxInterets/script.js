/*
    Exercice 09
*/

const result = document.querySelector(".result")

let capitalInitial,
    tauxInterets,
    duree,
    capitalFinal,
    interets,
    affichage

capitalInitial = Number(prompt("Saisir votre capital :"))
tauxInterets = Number(prompt("Saisir votre taux d'interets :"))
duree = Number(prompt("Saisir la durée de l'épargne :"))

capitalFinal = Math.round(capitalInitial * Math.pow(1+(tauxInterets/100), duree))
interets = Math.round(capitalFinal - capitalInitial)

affichage = `<p>Avec un capital initial de : ${capitalInitial} euros</p>
<ul>
    <li>Le montant total des intérêts s'élèvera à ${interets}</li>
    <li>le capital final est de : ${capitalFinal}</li>
</ul>`


result.innerHTML = affichage