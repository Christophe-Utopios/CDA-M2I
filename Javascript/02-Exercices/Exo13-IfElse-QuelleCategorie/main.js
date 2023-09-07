/**
 * Exercice13 - IfElse - Dans quelle catégorie est mon enfant...?
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Récupération et stockage des saisie utilisateur
var age = Number(prompt("Veuillez saisir l'âge de votre enfant :"));

// Etablissement Structure If() pour vérifier la catégorie correspondant à l'enfant
if (age < 3) {
    resultat = `Votre enfant est trop jeune pour pratiquer`;
    alert(resultat);
} else if (age >= 3 && age <= 6) {
    resultat = `Votre enfant est dans la catégorie "BABY"`;
    alert(resultat);
} else if (age >= 7 && age <= 8) {
    resultat = `Votre enfant est dans la catégorie "Poussin"`;
    alert(resultat);
} else if (age >= 9 && age <= 10) {
    resultat = `Votre enfant est dans la catégorie "Pupille"`;
    alert(resultat);
} else if (age >= 11 && age <= 12) {
    resultat = `Votre enfant est dans la catégorie "Minime"`;
    alert(resultat);
} else if (age >= 13 && age < 18) {
    resultat = `Votre enfant est dans la catégorie "Cadet"`;
    alert(resultat);
} else {
    resultat = `Ce n'est plus un "enfant"!`;
    alert(resultat);
}

// Injection du résultat dans l'element HTML .result
result.innerHTML = `${resultat}`;