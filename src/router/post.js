const express = require('express');
const tokenValidateMiddleware = require('../middlewares/tokenValidate.middleware');
const postController = require('../controllers/postController');

const routers = express.Router();

routers.get('/', tokenValidateMiddleware, postController.getAllPost);

module.exports = routers;