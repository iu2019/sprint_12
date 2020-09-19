const readFile = require('./helpers');

const readCards = async (req, res) => {
  try {
    const cards = await readFile('../data/cards.json');
    res.send(cards);
  } catch (err) {
    res.status(500).send({ message: 'Ошибка чтения файла карточек' });
  }
};

const readCardById = async (req, res) => {
  const { id } = req.params;

  try {
    const cards = await readFile('../data/cards.json');
    const cardSought = cards.find(item => item._id === id);
    if (!cardSought) {
      res.status(404).send({ message: 'Нет карточки с таким _id' });
    } else {
    // res.header('Content-Type', 'application/json');
      res.status(200).send(cardSought);
    }
  } catch (err) {
    res.status(500).send({ message: 'Ошибка чтения файла карточек' });
  }
};

module.exports = { readCards, readCardById };
