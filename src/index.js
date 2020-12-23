const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = process.env.PORT;

db.connect();

app.use(morgan('dev'));

// log req body
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

route(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});