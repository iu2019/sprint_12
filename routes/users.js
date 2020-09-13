const router = require('express').Router();
let users =[];
const fs = require('fs');
const path = require('path');

let data;

router.get ('/users', function (req, res) {

  try {
        data = fs.readFileSync(path.join(__dirname,'../data/users.json'), 'utf8' );
      } catch (err) {
        console.log('\n JSON read error', err);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.status(404).end('<h1>Ошибка чтения файла пользователей</h1>','utf8');
        return;
    }

  try {
        users = JSON.parse(data);
      } catch(err) {
        console.log('\n JSON inconsistent or missing');
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.status(404).end('<h1>Ошибка формата записи пользователяк</h1>','utf8');
        return;
    }

  res.json(users);

});

router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const item = users.find(item => item._id === id);

  if (!item) {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.write (JSON.stringify({"message": "Нет пользователя с таким _id"}));
    return;
  } else {
      res.header("Content-Type",'application/json');

      res.send(item);

  }

});

module.exports =  router ;