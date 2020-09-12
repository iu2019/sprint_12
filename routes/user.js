const router = require('express').Router();
const user = require('../data/user.json');

router.get ('/user', (req, res, next) => {
  res.header("Content-Type",'application/json');
  res.json(user);
  next();
});

router.get('/user/:id', (req, res, next) => {
  const id = req.params.id;
  const item = user.find(item => item._id === id);

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
  next();
});

module.exports =  router ;