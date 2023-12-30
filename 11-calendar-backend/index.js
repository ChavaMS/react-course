const express = require('express');
const { dbConnection } = require('./database/config.js');
const cors = require('cors');
require('dotenv').config();

const app = express();

// DB
dbConnection();

app.use(cors());

app.use(express.static('public'));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});