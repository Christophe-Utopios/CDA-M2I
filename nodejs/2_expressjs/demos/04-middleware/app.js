import express from 'express'
import digimons from './routes/digimons.js';
import { dateMiddleware, queryLogger } from './middlewares/middlewares.js';
import auth from './routes/auth.js';
import cors from 'cors';

const app = express();

// Middleware d'application: s'applique à TOUS LES ENDPOINTS

// Cross-origin resource sharing
//mécanisme qui consiste à ajouter des en-têtes HTTP 
//pour permettre d'accéder à des ressources d'un serveur situé sur une autre origine que le site courant
app.use(cors());

// Middleware de serialization/deserialization 
app.use(express.json());
app.use(dateMiddleware);
app.use(queryLogger);

// Utilisation d'un routeur
app.use('/digimons', digimons);

app.use('/auth', auth);

app.get('/', (req, res) => {
    console.log(req.dateRequest);
    res.json({id: 1});
});

app.listen(4000, () => {
    console.log('http://127.0.0.1:4000')
});
