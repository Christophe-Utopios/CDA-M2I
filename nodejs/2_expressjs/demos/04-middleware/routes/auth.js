import express from 'express'
import { authMiddleware } from '../middlewares/middlewares.js';

const auth = express.Router();

// Application du endpoint d'authentication sur la route admin
auth.post('/admin', authMiddleware, (req, res) => {
    res.send("Mes infos hyper secrètes");
});

auth.get('/', (req, res) => {
    res.send("Bienvenue sur le routeur d'authentication")
});

export default auth;