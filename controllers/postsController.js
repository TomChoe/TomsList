const postsDB = require('../models/postsDB');

module.exports = {
	index(req, res, next) {
		postsDB.findAll()
		.then((posts) => {
			res.locals.posts = posts;
			next()
		})
		.catch((err) => next(err));
	},

	getPost(req, res, next) {
		postsDB.findPostId(req.params.id)
		.then((post) => {
			res.locals.post = post;
			next()
		})
		.catch((err) => next(err));
	}
}