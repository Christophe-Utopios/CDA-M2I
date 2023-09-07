/**
 * EXERCICE18 - LES STRUCTURES CONDITIONNELLES - Quelle boisson vais-je prendre?
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Declaration des variables
let choix, boisson, affichage;
let erreur = false;
const menu = `***** DISTRIBUTEUR DE BOISSON *****
                1) Eau
                2) Jus d'oranges
                3) Limonade
                4) Café
                5) Thé

                Faites votre choix : `;

// Insertion du titre dans la chaine affichage
affichage = "<h3>Quelle boisson vais-je prendre?</h3><br>";

// Récupération choix utilisateur
choix = prompt(menu);

// Structure Switch cases en fonction de choix
switch (choix) {
    case "1":
        boisson = "Eau";
        break;
    case "2":
        boisson = "Jus d'oranges";
        break;
    case "3":
        boisson = "Limonade";
        break;
    case "4":
        boisson = "Café";
        break;
    case "5":
        boisson = "Thé";
        break;
    default:
        // Affichage de l'erreur et bool erreur = true
        affichage+="Erreur de choix..."
        erreur = true;
        break;
}

// Si le choix de l'utilisateur correspond au menu
if (!erreur) {
    // Affichage du choix
    affichage += `***** DISTRIBUTEUR DE BOISSON *****<br>
                1) Eau<br>
                2) Jus d'oranges<br>
                3) Limonade<br>
                4) Café<br>
                5) Thé<br>
                <br>
                Faites votre choix : <b>${choix}</b> <br>
                <br>
                Votre <b>${boisson}</b> est servie... `
}


// Injection du résultat dans l'element HTML .result
result.innerHTML = `${affichage}`;