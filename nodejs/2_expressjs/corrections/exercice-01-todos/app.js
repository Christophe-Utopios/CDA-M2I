import express from "express";
import { TodoDao } from "./dao/TodoDao.js";
import { Todo } from "./models/Todo.js";

const app = express();

// Classe d'accès aux données
const todoDao = new TodoDao();

// Utilisation du middleware pour la sérialisation/desérialisation en JSON
app.use(express.json());

// Renvoie tous les todos
app.get('/todos', (req, res) => {
    res.json(todoDao.getAll());
});

// Renvoie un todo spécifique
app.get('/todos/:todoId', (req, res) => {
    let todo = todoDao.findById(req.params.todoId);

    if(todo == undefined) {
        res.status(404).json({code: 404, message: "aucun todo trouvé avec cet id"});
    }

    res.json(todo);
});

// Créé un todo
app.post('/todos', (req, res) => {
    const {title, content, statut} = req.body;
    let todo = new Todo(null, title, content, statut);
    res.json(todoDao.save(todo));
});

// Mettre à jour le todo
app.put('/todos/:todoId', (req, res) => {
    // Récupération des informations depuis le corps de la requête
    const {id, title, content, statut} = req.body;

    // On vérifie que l'id de l'objet correspond à celui passé en paramètre
    if(req.params.todoId != id) res.sendStatus(409);

    // Initialisation d'un todo
    let todo = new Todo(id, title, content, statut);

    // Mise à jour du todo
    todoDao.updateTodo(todo) ? res.sendStatus(200) : res.status(400).json({code: 400, message: "problème lors de la mise à jour du todo"})
});

// Modifier statut
app.patch('/todos/:todoId/statut', (req, res) => {
    todoDao.updateStatut(req.params.todoId) ? res.sendStatus(200) : res.sendStatus(400);
});

// Supprimer le todo
app.delete('/todos/:todoId', (req, res) => {
    todoDao.deleteTodo(req.params.todoId);
    res.sendStatus(200);
});

// Récupérer un todo par son title
app.get('/todos/search/:search', (req, res) => {
    res.json(todoDao.searchByTitle(req.params.search));
});

app.listen(3001, () => {
    todoDao.readFile();
    console.log('http://127.0.0.1:3001');
});