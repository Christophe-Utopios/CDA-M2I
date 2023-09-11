/**
 * EXERCICE 25 - FOR - Chaine Entiers
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
    // Mise en place de deux boucles imbriquées pour rechercher les liste d'entiers = nb
    for (let i = 1; i <= nombre / 2 + 1; i++) {
        let somme = i;
        let chaine = nombre + " = " + i;
        for (let j = i + 1; j <= nombre / 2 + 1; j++) {
            somme += j;
            chaine += "+" + j;
            if (somme == nombre) {
                affichage += `<li>${chaine}</li>`;
                break;
            }
        }
    }
    affichage+="</ul>";
}



// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Injection du résultat dans l'element HTML .result
result.innerHTML = affichage;