/*
    Exercice 04
*/

const result = document.querySelector(".result")

let mot,
    motInverse,
    affichage

affichage = "<h1>Ce mot est-il un palindrome?<h1>"

mot = prompt("Veuillez saisir un mot :")
affichage += `<h3>Vous avez saisi ${mot}</h3>`

motInverse = mot.split('').reverse().join('')
console.log(motInverse);

if (motInverse == mot) {
    affichage += `<h3>Le mot ${mot} est un palindrome</h3>`
} else {
    affichage += `<h3>Le mot ${mot} n'est pas un palindrome</h3>`
}

result.innerHTML = affichage