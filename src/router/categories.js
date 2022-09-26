const express = require('express');
const categoryController = require('../controllers/categoryController');
const tokenValidateMiddleware = require('../middlewares/tokenValidate.middleware');

const routers = express.Router();

routers.post('/', tokenValidateMiddleware, categoryController.insertCategory);

module.exports = routers;