const loginRouter = require('express').Router();

const users = require('../controllers/usersController');

const views = require('../controllers/viewsController');

loginRouter.get('/', views.loginPage)

loginRouter.post('/', users.getUser, users.checkUser, users.isLoggedIn)

module.exports = loginRouter;