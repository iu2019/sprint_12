const router = require('express').Router();
const users = require('../data/users.json');

router.get ('/users', (req, res, next) => {
  res.header("Content-Type",'application/json');
  res.json(users);
  // next();
});

router.get('/users/:id', (req, res, next) => {
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
  // next();
});

module.exports =  router ;