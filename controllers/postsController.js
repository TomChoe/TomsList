const postsDB = require('../models/postsDB');

module.exports = {
	makeBlankPost(req, res, next) {
		const blankPost = {
			user_id: null,
			cat_id: null,
			title: null,
			price: null,
			content: null,
			imgurl: null,
			location: null
		}
	},

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
	},

	getUserPosts(req, res, next) {
		postsDB.findPostsByUser(req.session.user.id)
		.then((userPosts) => {
			res.locals.userPosts = userPosts
			next()
		})
		.catch((err) => next(err))
	},

	getPostsByCat(req, res, next) {
		postsDB.findPostsByCat(req.params.id)
		.then((catPosts) => {
			console.log('Categories by id', catPosts)
			res.locals.catPosts = catPosts
			next()
		})
		.catch((err) => next(err))
	},

	createPost(req, res, next) {
		postsDB.savePost(req.body)
		.then((post) => {
			res.locals.post = post
			next()
		})
		.catch(err => next(err));
	},

	updatePost(req, res, next) {
		postsDB.update(req.body)
		.then((post) => {
			res.locals.post = post
			next();
		})
		.catch(err => next(err))
	},

	deletePost(req, res, next) {
		postsDB.delete(req.params.id)
		.then(() => next())
		.catch(err => next(err));
	}
}