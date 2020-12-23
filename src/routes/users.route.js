const express = require('express')
const User = require('../models/User');

const usersController = require('../controllers/users.controller');

const router = express.Router();

router.get('/', usersController.index);
router.post('/', usersController.create);
router.post('/login', usersController.login);

module.exports = router;