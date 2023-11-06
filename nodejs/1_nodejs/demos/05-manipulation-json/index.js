const fs = require('fs');

let personnes = [{firstname:'toto', lastname: 'dupont'}, {firstname:'titi', lastname: 'dupond'}]

let file = './data.json';

// Enregistrement du tableau dans le fichier sous forme de chaîne (format json)
fs.writeFileSync(file, JSON.stringify(personnes));

let personnesFromFile = [];

// Lecture du contenu du fichier sous forme de buffer puis conversion en chaîne
const content = fs.readFileSync(file).toString();

// Transformation d'une chaine en tableau js
personnesFromFile = JSON.parse(content);

console.log(personnesFromFile);