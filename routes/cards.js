const router = require('express').Router();
let cards = [];
const fs = require('fs');
let data;



router.get ('/cards', function (req, res) {

  try {

        data = fs.readFileSync('data/cards.json', 'utf8' );
      } catch (err) {
        console.log('JSON read error', err);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.status(404).end('<h1>Ошибка чтения файла карточек</h1>','utf8');
        return;
    }

  try {
        cards = JSON.parse(data);
      } catch(err) {
        console.log(err, 'JSON inconsistent or missing');
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.status(404).end('<h1>Ошибка формата карточек</h1>','utf8');
        return;
    }

  res.json(cards);

});

router.get('/cards/:id', (req, res) => {
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

});

module.exports =  router ;

