const express = require('express');
const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');

const routers = express.Router();

routers.post('/', userMiddleware, userController.insertUser);

module.exports = routers;