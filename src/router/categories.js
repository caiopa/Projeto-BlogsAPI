const express = require('express');
const categoryController = require('../controllers/categoryController');
const tokenValidateMiddleware = require('../middlewares/tokenValidate.middleware');

const routers = express.Router();

routers.post('/', tokenValidateMiddleware, categoryController.insertCategory);
routers.get('/', tokenValidateMiddleware, categoryController.getAllCategories);

module.exports = routers;