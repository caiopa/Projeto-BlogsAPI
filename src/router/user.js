const express = require('express');
const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');
const tokenValidateMiddleware = require('../middlewares/tokenValidate.middleware');

const routers = express.Router();

routers.get('/', tokenValidateMiddleware, userController.getUsers);
routers.get('/:id', tokenValidateMiddleware, userController.findUserById);

routers.post('/', userMiddleware, userController.insertUser);

module.exports = routers;