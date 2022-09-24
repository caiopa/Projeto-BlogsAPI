const express = require('express');
const loginController = require('../controllers/loginController');
const authMiddleware = require('../middlewares/auth.middleware');

const routers = express.Router();

routers.post('/', authMiddleware, loginController.login);

module.exports = routers;