/*
    Exercice 08
*/

const result = document.querySelector(".result")

let prixHt,
    tauxTva,
    mtTva,
    prixTtc,
    affichage

prixHt = Number(prompt("Saisir le montant H.T :"))
tauxTva = Number(prompt("Saisir le taux de T.V.A :"))

mtTva = Math.round(prixHt * tauxTva / 100)
prixTtc = prixHt + mtTva

affichage = `<p>Prix H.T : ${prixHt}</p>
    <ul>
        <li>Le montant T.V.A est de : ${mtTva}</li>
        <li>Le prix TTC est de : ${prixTtc}</li>
    </ul>
`

result.innerHTML = affichage