const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectTODb = require('./db/db');
const userRoutes = require('./routes/user.routes');

const app = express();
connectTODb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoutes);

module.exports = app;