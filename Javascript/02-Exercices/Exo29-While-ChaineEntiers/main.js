/**
 * EXERCICE 29 - FOR - Chaine Entiers
 */

// Déclaration variables
let nombre = 0,
    affichage = `<h2>Liste d'entiers chaînés</h2><br><hr>`;


// Récupération du nombre saisi par l'utilisateur
nombre = Number(prompt("Veuillez saisir un chiffre / nombre :"));

// Affichage de la saisi de l'utilisateur
affichage += nombre >= 0 && nombre < 10 ? `<p>Vous avez saisi le chiffre <b>${nombre}</b></p>` : nombre > 9 ? `<p>Vous avez saisi le nombre <b>${nombre}</b></p>` : `<p>Veuillez saisir un <b>nombre</b></p>`;


if (!isNaN(nombre)) {
    affichage += `<p>Voici la liste d'entiers chaînés dont la somme est égale à <b>${nombre}</b>:</p><ul>`;
    let i = 1;
    // Mise en place de deux boucles imbriquées pour rechercher les liste d'entiers = nb
    while (i <= nombre / 2 + 1) {
        let somme = i;
        let chaine = nombre + " = " + i;
        let j = i + 1;
        while (j <= nombre / 2 + 1) {
            somme += j;
            chaine += "+" + j;
            if (somme == nombre) {
                affichage += `<li>${chaine}</li>`;
                break;
            }
            j++
        }
        i++
    }
    affichage += "</ul>";
}



// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Injection du résultat dans l'element HTML .result
result.innerHTML = affichage;