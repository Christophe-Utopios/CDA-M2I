/*
    Exercice 07
*/

const result = document.querySelector(".result")

let cote1,
    cote2,
    sommeCarre,
    hypotenuse

cote1 = Number(prompt("Saisir la longueur du 1er coté :"))
cote2 = Number(prompt("Saisir la longueur du second coté :"))

sommeCarre = Math.pow(cote1, 2) + Math.pow(cote2, 2)
hypotenuse = Math.sqrt(sommeCarre).toFixed(2)

affichage = `<p>Les longueurs des cotés du carré : ${cote1} cm et ${cote2} cm</p>
            <p>La longueur de l'hypoténuse : ${hypotenuse} cm</p>`

result.innerHTML = affichage