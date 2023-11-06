import express from "express";

const app = express();

// On créé une route sur l'URL '/' et on définit l'action qui sera déclenché lorsque l'on se connecte dessus
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/about", (req, res) => {
  res.send("ceci est ma première application");
});

app.listen(3030, () => {
  console.log("http://127.0.0.1:3030");
});
