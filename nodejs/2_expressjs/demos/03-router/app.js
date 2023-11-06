import express from 'express'
import dogs from './routes/dogs.js'
import users from './routes/users.js'

const port = 3001;

const app = express();

app.use(express.json());
app.use('/dogs', dogs);
app.use('/users', users);

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});

