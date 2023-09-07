/**
 * Exercice10 - Conditions - Test Connection
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Declaration des constantes email et mdp
const email = "contact@teamjs.fr";
const mdp = "leLundiAuSoleil";

// Récupération et stockage des saisie utilisateur
let userEmail = prompt("Saisir votre email");
let userPassword = prompt("Saisir votre mot de passe");

// Affichage titre
let resultat="<h2>Test de connection</h2>";


// Etablissement Structure If() pour vérifier les saisies utilisateurs
if (userEmail == email) {
    // Si la saisie correspond à la variable mdp
    if (userPassword == mdp) 
        resultat+="Bienvenue sur votre espace sécurisé";       
    else 
        resultat+="Mot de passe incorrect";    
} 
else {
    resultat+="Email non reconnu"
}

// Injection du résultat dans l'element HTML .result
result.innerHTML = resultat;