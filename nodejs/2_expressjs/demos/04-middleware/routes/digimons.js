import express from 'express'
import { queryLogger } from '../middlewares/middlewares.js';

const digimons = express.Router();

// Utilisation d'un middleware sur l'ensemble des routes de ce router
digimons.use(queryLogger);

digimons.get('/', (req, res) => {
    res.send("Liste de digimons")
});

export default digimons;