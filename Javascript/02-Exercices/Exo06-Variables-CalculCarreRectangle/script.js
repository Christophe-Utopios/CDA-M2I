/*
    Exercice 06
*/

const result = document.querySelector(".result")

let cote,
    longueur,
    largeur,
    perimettreCarre,
    aireCarre,
    perimettreRectangle,
    aireRectangle,
    affichage

affichage = "<h1>Calcul de l'aire et du périmètre d'un carré<h1>"

/*
    Carré
*/

cote = Number(prompt("Saisir la longueur du carré (en cm) :"))

perimettreCarre = cote * 4
aireCarre = cote *cote

affichage += `<p>Les longueurs des cotés du carré : ${cote}<p>
    <ul>
        <li>Le périmètre du carré : ${perimettreCarre}</li>
        <li>L'aire du carré : ${aireCarre}</li>
    </ul>
`

/*
    Rectangle
*/

longueur = Number(prompt("Saisir la longueur du rectangle (en cm) :"))
largeur = Number(prompt("Saisir la largeur du rectangle (en cm) :"))

perimettreRectangle = (longueur + largeur) * 2
aireRectangle = longueur * largeur

affichage += `<p>Les longueurs du rectangle : ${longueur}, largeur : ${largeur}<p>
    <ul>
        <li>Le périmètre du rectangle : ${perimettreRectangle}</li>
        <li>L'aire du rectangle : ${aireRectangle}</li>
    </ul>
`

result.innerHTML = affichage