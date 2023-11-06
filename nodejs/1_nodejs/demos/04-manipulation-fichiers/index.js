import {
  stat,
  readFile,
  readFileSync,
  writeFile,
  writeFileSync,
  appendFile,
} from "fs";
import fsPromise from "fs/promises";
import path from "path";

const monFichier = "./hello.txt";

stat(monFichier, (error, stats) => {
  if (error) {
    console.log(error.message);
  }

  if (stats.isFile()) {
    console.log("C'est un fichier");
  }

  console.log(stats.size);
});

// Retourne le dossier parent
console.log("dossier parent:", path.dirname(monFichier));

// base name retourne le nom complet du fichier, extname l'extension (ex: .txt, .json ...)
console.log(
  "Nom fichier:",
  path.basename(monFichier),
  "extension:",
  path.extname(monFichier)
);

// resolve retourne le chemin absolu du fichier
console.log("chemin absolu:", path.resolve(monFichier));

// Lecture de fichier de manière asynchrone
readFile(monFichier, { encoding: "utf-8" }, (error, data) => {
  console.log("callback:", data);
});

// Lecture de fichier de manière synchrone
const response = readFileSync(monFichier, { encoding: "utf8" });
console.log("synchrone:", response);

async function readMyFileAsync(file) {
  let result = "";
  try {
    result = await fsPromise.readFile(file, { encoding: "utf8" });
  } catch (error) {
    console.error(error);
    return;
  }
  return result;
}

let myResult = await readMyFileAsync(monFichier);
console.log("promesse:", myResult);

let phrase = "J'adore les chips\net les glaces";

// le flag permet de définir l'accès en écriture/lecture, la création ou non du fichier, le fait d'ajouter le contenu à la fin
writeFile("./ecriture.txt", phrase, { encoding: "utf8", flag: "a+" }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

writeFileSync("./ecriture.txt", "oui ça va", { flag: "a" });

appendFile("./ecriture.txt", "banana", (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
