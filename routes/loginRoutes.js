const loginRouter = require('express').Router();

const users = require('../controllers/usersController');

const views = require('../controllers/viewsController');

loginRouter.get('/', views.loginPage, views.show404)

loginRouter.post('/', users.authenticate, views.show404)

module.exports = loginRouter;