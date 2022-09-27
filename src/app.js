const express = require('express');

const routerLogin = require('./router/login');
const routerUser = require('./router/user');
const routerCategories = require('./router/categories');
const routerPost = require('./router/post');
const err = require('./middlewares/error');

// const authMiddleware = require('./middlewares/auth.middleware');
// ...

const app = express();

app.use(express.json());

// ...]
app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/categories', routerCategories);
app.use('/post', routerPost);

app.use(err);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
