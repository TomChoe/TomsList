const signupRouter = require('express').Router();

const signupController = require('../controllers/usersController');

const views = require('../controllers/viewsController');

signupRouter.route('/')
	.get(views.signupPage)
	.post(signupController.newUser, views.userCreate);

module.exports = signupRouter;