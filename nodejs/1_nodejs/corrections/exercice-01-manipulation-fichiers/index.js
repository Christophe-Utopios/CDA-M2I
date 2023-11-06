import LineByLine from "n-readlines";
import { mkdirSync } from 'fs';

let file = './directories.txt';

let line;
let reader = new LineByLine(file);

while(line = reader.next()) {
    let directory = line.toString().trim();
    try {
        mkdirSync(directory);
        console.log(`Le répertoire ${directory} a bien été créé !`);
    } catch(err) {
        console.error(`Erreur lors de la création du dossier ${directory}`)
    }
}