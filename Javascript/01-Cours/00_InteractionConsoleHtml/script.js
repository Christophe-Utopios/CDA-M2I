// Commentaire sur une ligne

/*
    Commentaire 
        sur
            plusieurs 
                lignes
*/

/*
    Les types de variables :
        - let -> Peut être modifiée mais pas redéclarée
        - const -> Peut être ni modifiée ni redéclarée

*/

let prenom = "Christophe",
 age,
 resultat = ""

// age = Infinity
// age = 1654654132134654654321654645654354654n

console.log(age);

const result = document.querySelector(".result")

prenom = prompt("Veuillez saisir votre prénom :")

result.innerHTML = `Votre prénom : ${prenom}`
// result.innerHTML = "Votre prénom :" + prenom + " Toto"

 // Affichage de la valeur dans la console.
console.log(prenom);

// alert("Hello World !")