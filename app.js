/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const getUsers = require('./routes/users');
const getCards = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', getUsers);
app.use('/', getCards);
app.use('/', (req, res) => {
  res.set({ 'content-type': 'application/json; charset=utf-8' });
  res.status(404).end(JSON.stringify({ message: 'Запрашиваемый ресурс не найден' }), 'utf8');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
