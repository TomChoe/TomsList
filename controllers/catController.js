const catDB = require('../models/catDB');

module.exports = {
	index(req, res, next) {
		catDB.getAll()
		.then((cat) => {
			res.locals.cat = cat
			next()
		})
		.catch(err => next(err))
	}
}