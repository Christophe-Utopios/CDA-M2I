/**
 * Exercice 20 - Switch - Calcul Impôts
 */
// Déclaration variables
var revenus = 0,
    nbAdulte = 0,
    nbEnfants = 0,
    nbParts = 0,
    revenuIMpossable = 0,
    montantImpot = 0;

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Récupération et stockage des saisie utilisateur
var revenus = Number(prompt("Veuillez saisir le montant total des revenus du foyer :"));
var nbAdulte = Number(prompt("Veuillez saisir le nombre d'alulte(s) :"));
var nbEnfants = Number(prompt("Veuillez saisir le nombre d'enfant(s):"));


// Sugar Syntaxe (ternaire) pour le Calcul du nombre de parts
nbParts = nbEnfants <= 2 ? nbAdulte + nbEnfants * 0.5 : nbAdulte + nbEnfants - 1;



// Etablissement Structure If() pour calculer le montant de l'impôt
revenuImposable = revenus / nbParts;

switch (true) {
    case revenuImposable >= 10226 && revenuImposable <= 26070:
        montantImpot = Math.round((revenuImposable - 10225) * 0.11); break;
    case revenuImposable >= 26071 && revenuImposable <= 74545:
        montantImpot = Math.round((revenuImposable - 26070) * 0.3 + (26070 - 10226) * 0.11); break;
    case revenuImposable >= 74546 && revenuImposable <= 160336:
        montantImpot = Math.round((revenuImposable - 74545) * 0.41 +(74545 - 26070) * 0.3 + (26070 - 10226) * 0.11 ); break;
    case revenuImposable >= 160337:
        montantImpot = Math.round((revenuImposable - 160336) * 0.45 + (160336 - 74545) * 0.41 + (74545 - 26070) * 0.3 + (26070 - 10226) * 0.11); break;
}

montantImpot = montantImpot * nbParts;

// Injection du résultat dans l'element HTML .result
result.innerHTML = `Le montant de l'impôt sur le revenu pour un foyer composé de <b>${nbAdulte} adulte(s)</b> et
                    de <b>${nbEnfants} enfant(s)</b>, avec un revenu fiscal de <b>${revenus}€</b> 
                    s'élève à <b>${montantImpot}€</b>`;