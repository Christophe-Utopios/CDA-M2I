/**
 * EXERCICE26 - FOR - Meilleur Note / Moins bonne note
 */

// Déclaration variables
let nbNotes = 0,
    noteMax = 0,
    noteMin = 20,
    moyNotes = 0
affichage = `<h2>Meilleur Note / Moins bonne note</h2><br><hr>`;


// Récupération du nombre de notes saisi par l'utilisateur
nbNotes = Number(prompt("Combiens de notes allez vous saisir ?:"));
while (isNaN(nbNotes) || nbNotes < 1 ) {
    nbNotes = Number(prompt(`Erreur de saisie !"Combiens de notes allez vous saisir ?: `));
}

// Affichage de la saisi de l'utilisateur
affichage += `<p>La serie contiend <b>${nbNotes}</b> notes</p><ul>`;

// Récuperation des notes saisies par l'utilisateur et traitement

for (let i = 1; i <= nbNotes; i++) {
    // Récupération des la saisie pour chaque note
    let noteTmp = Number(prompt(`Merci de saisir la note n°${i} (sur 20) :`));

    while (isNaN(noteTmp) || noteTmp < 0 || noteTmp > 20) {
        noteTmp = Number(prompt(`Erreur de saisie ! Merci de saisir la note n°${i} (sur 20) :`));
    }
    // Affichage de la note saisie par l'utilisateur
    affichage += `<li>En note <b>${i}</b>, vous avez saisie <b>${noteTmp}</b></li>`;

    // Traitement note
    // Ajouter la note à la moyenne
    moyNotes += noteTmp;

    // Vérifiaction si noteTmp > a noteMax
    if (noteTmp > noteMax)
        noteMax = noteTmp;
    // Vérifiaction si noteTmp < a noteMin
    if (noteTmp < noteMin)
        noteMin = noteTmp;
}

affichage += `</ul><hr>`;

// Calcul de la moyenne des notes
moyNotes = Math.round(((moyNotes / nbNotes) + Number.EPSILON) * 100) / 100;

// Affichage des résultats
affichage += `<p>Sur l'ensemble des <b>${nbNotes} notes</b> :</p>
<ul>
    <li class="red">La moins bonne note est <b> ${noteMin}/20</b></li>
    <li class="green">La meilleur note est <b> ${noteMax}/20</b></li>
    <li class="gray">La moyenne des notes est <b> ${moyNotes}/20</b></li>
</ul>
<hr>
`


// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Injection du résultat dans l'element HTML .result
result.innerHTML = affichage;