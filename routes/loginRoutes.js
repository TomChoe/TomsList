const loginRouter = require('express').Router();

const loginController = require('../controllers/usersController');

const views = require('../controllers/viewsController');

loginRouter.route('/')
	.get(views.signupPage)
	.post(loginController.newUser, views.userCreate);

module.exports = loginRouter;