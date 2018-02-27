const loginDB = require('../models/usersDB');

module.exports = {
	newUser(req, res, next) {
		loginDB.createUser(req.body)
		.then((user) => {
			res.locals.user = user
			next()
		})
		.catch(err => next(err))
	},

	index() {
		loginDB.findUsers()
		.then((users) => {
			res.locals.users = users
			next()
		})
		.catch(err => next(err))
	}
}