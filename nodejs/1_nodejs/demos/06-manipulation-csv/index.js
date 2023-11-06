import fs from 'fs';
import LineByLine from 'n-readlines';

const file = 'data.csv';
let prenom = 'toto';
let nom = 'dupont';

fs.appendFileSync(file, `${prenom};${nom};\n`);
fs.appendFileSync(file, `arthur;d;\n`);

const linerReader = new LineByLine(file);

let line = '';

while(line = linerReader.next()) {
    console.log(line.toString())
}

const tab = [];

const reader = new LineByLine(file);

let otherLine = '';
while(otherLine = reader.next()) {
    const data = otherLine.toString().split(';');
    const contact = {prenom: data[0], nom: data[1]};
    tab.push(contact)
}

console.log(tab)