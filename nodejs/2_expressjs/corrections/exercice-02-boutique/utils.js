import { readFileSync, writeFileSync } from "fs";

// Cette classe statique permet de gérer une collection de modèles dans un fichier json
export class DataStore {
  static file;
  static data;

  static read() {
    // Lit depuis le fichier
    const raw = readFileSync(DataStore.file, { encoding: "utf-8" });
    const db = JSON.parse(raw);
    // Si des données existent dans le fichier, on les charges en mémoire
    for (let key in db) {
      if (key in this.data) DataStore.data[key] = db[key];
    }
  }

  static write() {
    // On sérialise notre objet dans un fichier
    writeFileSync(DataStore.file, JSON.stringify(this.data));
  }

  // réinitialise la db
  static reset() {
    writeFileSync(DataStore.file, "");
  }
}
