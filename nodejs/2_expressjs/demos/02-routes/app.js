import express from "express";

const app = express();

// Permet la sérialisation automatique de JSON en objet javascript
app.use(express.json());

// Renvoie du HTML
app.get("/", (req, res) => {
  res.send("<h1>Bienvenue sur mon API!</h1>");
});

// Lorsque la requête est effectuée avec la méthode post, on récupère l'objet de la requête
app.post("/users", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// Utilisation des paramètres dans notre route avec la syntaxe :nomVariable
app.get("/users/:userId", (req, res) => {
  // Récupérer les paramètres de l'url en GET : ex /users/1?sort=123 devient {sort: "123"}
  console.log(req.query);
  // Les clés/valeurs des paramètres sont stockés dans l'objet req.params
  res.json({ userId: req.params.userId, firstname: "toto" });
});

app.get("/z", (req, res) => {
  res.send("Tu es le vrai Z");
});

app.get(/z/, (req, res) => {
  res.send("Bienvenue le Z");
});

app.all("/secret", (req, res) => {
  res.json({ secret: "Vous êtes très beaux" });
});

app.listen("3000", () => {
  console.log("http://127.0.0.1:3000");
});
