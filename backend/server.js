const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const dbConfig = require('./database/db');

// Express Route
const studentRoute = require('../backend/routes/student.route');

// Connecting MongoDB Database
mongoose.connect(dbConfig.db, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log('Database successfully connected!'))
    .catch(error => console.log('Could not connect to database : ' + error));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the cors middleware
app.use(cors());

app.use('/students', studentRoute);

// PORT
const port = process.env.PORT || 4349;
const server = app.listen(port, () => console.log('Connected to port ' + port));

// Error handling
app.use((req, res, next) => {
    res.status(404).send('Error 404!');
});

app.use((err, req, res, next) => {
    console.error(err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send(err.message);
});