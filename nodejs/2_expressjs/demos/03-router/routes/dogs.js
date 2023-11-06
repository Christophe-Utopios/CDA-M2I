import express from 'express'

const dogs = express.Router();

dogs.get('/', (req, res) => {
    res.send("liste de chiens")
});

export default dogs;