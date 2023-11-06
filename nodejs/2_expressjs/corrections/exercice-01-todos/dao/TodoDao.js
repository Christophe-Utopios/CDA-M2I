import { readFileSync, writeFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";
import { resolve } from "path";

export class TodoDao {
  constructor() {
    this.file = resolve("./data/db.json");
    this.todos = [];
  }

  readFile() {
    const file = readFileSync(this.file, { encoding: "utf-8" });
    this.todos = JSON.parse(file);
  }

  writeFile() {
    writeFileSync(this.file, JSON.stringify(this.todos));
  }

  getAll() {
    return this.todos;
  }

  save(todo) {
    // Génération d'un uuid
    todo.id = uuidv4();
    // Ajout au tableau de todos
    this.todos.push(todo);
    // Mise à jour du fichier db.json (on réécrit tout)
    this.writeFile();
    return todo;
  }

  findById(id) {
    return this.todos.find((t) => t.id === id);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
    this.writeFile();
  }

  updateTodo(todoUpdate) {
    const todo = this.findById(todoUpdate.id);
    if (todo == undefined) {
      return false;
    }
    todo.statut = todoUpdate.statut;
    todo.title = todoUpdate.title;
    todo.content = todoUpdate.content;

    this.writeFile();
    return true;
  }

  updateStatut(id) {
    const todo = this.findById(id);
    if (todo == undefined) {
      return false;
    }
    todo.statut = !todo.statut;
    this.writeFile();

    return true;
  }

  searchByTitle(title) {
    return this.todos.filter(todo => todo.title === title);
  }
}
