const express = require('express');
const path = require('path');
const  getUser  = require('./routes/user');
const  getCards  = require('./routes/cards');
const { PORT = 3000 } = process.env;
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', getUser);
app.use('/', getCards);
app.use('/', (req, res) => {
  res.set({ 'content-type': 'application/json; charset=utf-8' });
  res.status(404).end('<h1>Запрашиваемый ресурс не найден</h1>','utf8');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});



