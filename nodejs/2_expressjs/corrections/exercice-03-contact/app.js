import express from 'express';
import 'dotenv/config';
import ContactDao from './dao/ContactDao.js';
import Contact from './models/Contact.js';
import { authMiddleware } from './middlewares/middlewares.js';

const FILE_PATH = './data/contact.csv';

const app = express();

app.use(express.json());

const contactDao = new ContactDao(FILE_PATH);

app.get('/contacts', (req, res) => {
    return res.json(contactDao.getAll());
});

app.get('/contacts/:id', (req, res) => {
    let contact = contactDao.getOneById(req.params.id);
    return contact == undefined ? res.sendStatus(404) : res.json(contact);
});

app.post('/contacts', authMiddleware, (req, res) => {
    const {firstName, lastName, phone, email} = req.body;
    let contact = new Contact(null, firstName, lastName, phone, email);
    res.json(contactDao.save(contact));
});

app.put('/contacts/:id', authMiddleware, (req, res) => {
    const {id, firstName, lastName, phone, email} = req.body; 
    if (req.params.id != req.body.id) return res.sendStatus(409);
    let contact = new Contact(id, firstName, lastName, phone, email);
    
    return contactDao.update(contact) ? res.sendStatus(409) : res.json(contact);
});

app.delete('/contacts/:id', authMiddleware, (req, res) => {
    contactDao.delete(req.params.id);
    res.sendStatus(200);
});

app.listen(process.env.PORT, () => {
    console.log(`listening on port: 127.0.0.1:${process.env.PORT}`)
})