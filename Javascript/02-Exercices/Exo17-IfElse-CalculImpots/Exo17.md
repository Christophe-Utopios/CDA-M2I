---
marp: true
header: "Exercice 17 – If…Else – Quel sera le montant de mes impôts ?"
---
<style scoped>
:not(h1){
    font-size : 22px;
    font-weight : bold;
}
</style>

# Exercice 17 – If…Else – Quel sera le montant de mes impôts ?


Sujet : Créez un nouveau projet et réalisez le programme permettant :
- [lien barème](https://www.economie.gouv.fr/particuliers/tranches-imposition-impot-revenu)
- Stockez le montant net imposable, le nombre d’adulte(s) et d’enfant(s) dans des variables.
- Chaque adulte vaut 1 part et les deux premiers enfants valent 0,5 part chacun puis 1 part à partir du troisième enfant. Exemple : 1 couple marié avec 3 enfants obtiendra 4 parts : 2 parts pour les adultes (1 x 2) et deux parts pour les enfants (0,5x2+1).
- Arrondissez les résultats avec ma méthode Math.round() pour afficher un résultat en euros sans décimale. C’est un exercice, une précision à l’euro près est amplement suffisante.

---
<style scoped>
img {
    margin-left : 175px;
}
</style>

![w:750](../../assets/Exo17.png)