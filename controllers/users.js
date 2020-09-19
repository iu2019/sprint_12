const readFile = require('./helpers');

const readUsers = async (req, res) => {
  try {
    // ждём пока файл будет прочитан
    const users = await readFile('users.json');
    // отправляем его
    res.send(users);
  } catch (err) {
    // а если наш код упал, то возвращаем 500
    res.status(500).send({ message: 'Ошибка чтения файла пользователей' });
  }
};

const readUserById = async (req, res) => {
  const { id } = req.params;

  try {
    // ждём пока файл будет прочитан
    const users = await readFile('users.json');
    // находим нужного пользователя
    const userSought = users.find((item) => item._id === id);
    // .. или не находим
    if (!userSought) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
    } else {
    //  res.header('Content-Type', 'application/json');
    // но если находим, то посылаем
      res.status(200).send(userSought);
    }
  } catch (err) {
    // а если наш код упал, то возвращаем 500
    res.status(500).send({ message: 'Ошибка чтения файла пользователей' });
  }
};

module.exports = { readUsers, readUserById };
