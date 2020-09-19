/* eslint-disable no-console */
const router = require('express').Router();
const { readCards, readCardById } = require('../controllers/cards');

router.get('/cards', readCards);

router.get('/cards/:id', readCardById);

module.exports = router;
