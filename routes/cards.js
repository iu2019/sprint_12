const router = require('express').Router();
const cards = require('../data/cards.json');


router.get ('/cards', (req, res, next) => {
  try {
    JSON.stringify(cards);
  } catch (e) {
    res.writeHead(500, {
      'Content-Type': 'application/json'
    });

    res.write (JSON.stringify({"message": "Невалидный JSON"}));
  }
    res.json(cards);

  next();
});

router.get('/cards/:id', (req, res, next) => {
  const id = req.params.id;
  const item = cards.find(item => item._id === id);
  if (!item) {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.write (JSON.stringify({"message": "Нет карточки с таким _id"}));
    return;
  } else {
      res.header("Content-Type",'application/json');

      res.send(item);

  }
  next();
});

module.exports =  router ;

