import express from 'express'

const users = express.Router();

users.get('/', (req, res) => {
    res.send("liste users")
});

users.post('/', (req, res) => {
    res.send("Création d'un user")
});

users.get('/:id', (req, res) => {
    res.send(req.params.id);
});

export default users;