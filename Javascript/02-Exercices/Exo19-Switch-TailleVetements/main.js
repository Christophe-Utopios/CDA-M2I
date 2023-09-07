/**
 * Exercice19 - Switch - Quelle est la nature du triangle ABC...?
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Déclaration d'une variable pour l'affichage
let resultat, affichage;

// Affichage du titre
affichage="<h2>Quelle taille de vêtement vais-je prendre?</h2><br>";

// Récupération et stockage des saisie utilisateur
let taille = Number(prompt("Veuillez saisir votre taille (en cm) :"));
let poids = Number(prompt("Veuillez saisir votre poids (en kg) :"));
affichage+=`Pour <b>${taille}cm</b> et <b>${poids}kg</b> : <br>`;

// Etablissement Structure SWITCH pour vérifier la taille
switch (true) {
    case (taille >= 169 && taille < 183 && poids >= 48 && poids < 54 ) ||
         (taille >= 166 && taille < 178 && poids >= 54 && poids < 60 ) || 
         (taille >= 163 && taille < 175 && poids >= 60 && poids < 66 ) || 
         (taille >= 160 && taille < 172 && poids >= 66 && poids < 72 ):
        affichage +=`<ul>
                        <li>Prennez la <b>taille 2</b>.</li>
                    </ul>
                    `;
        break;
    case (taille >= 145 && taille < 172 && poids >= 43 && poids < 66 ):
        affichage +=`<ul>
                        <li>Prennez la <b>taille 1</b>.</li>
                    </ul>
                    `;
        break;
    case (taille >= 160 && taille < 187 && poids >= 54 && poids < 78 ):
        affichage +=`<ul>
                        <li>Prennez la <b>taille 3</b>.</li>
                    </ul>
                    `;
        break;
    default: affichage +=`<ul>
                            <li><b>Aucune taille ne vous correspond.</b></li>
                        </ul>`;

}


// Affichage du résultat dans une popup alert()
//alert(resultat);

// Injection du résultat dans l'element HTML .result
result.innerHTML = affichage;