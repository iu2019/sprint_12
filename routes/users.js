/* eslint-disable no-console */
const router = require('express').Router();
const { readUsers, readUserById } = require('../controllers/users');

router.get('/users', readUsers);

router.get('/users/:id', readUserById);

module.exports = router;
