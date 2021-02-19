require('dotenv');
const express = require('express');

const app = express();

const route = require('./app/routes/index.route');

app.use(express.json());

app.use(route);

app.listen(process.env.PORT || 3000, () =>
    console.log('listening to port 3000')
);
