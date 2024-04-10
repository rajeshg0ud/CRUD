// backend/database/db.js
const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/reactdb';

module.exports = {
    db: dbURI
};

mongoose.connect(dbURI, { useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
