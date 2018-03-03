module.exports = {
	loginPage(req, res) {
		res.render('login/login')
			data: res.locals.user
	},

	signupPage(req, res) {
		res.render('login/signup')
	},

	showPosts(req, res) {
		res.render('posts/allPosts', {
			data: res.locals.posts
		})
 	},

 	showPostsByCat(req, res) {
 		res.render('posts/showPostsByCat', {
 			data: res.locals.catPosts
 		})
 	},

 	showPost(req, res) {
 		res.render('posts/showPost', {
 			data: res.locals.post,
 			user: req.session.user
 		})
 	},

 	createForm(req, res) {
 		res.render('posts/createPost', {
 			data: req.session.user
 		})
 	},

 	updatePost(req, res) {
 		res.render('posts/updatePost', {
 			data: res.locals.post
 		})
 	},

 	postCreate(req, res) {
 		res.redirect('/posts');
 	},

 	userCreate(req, res) {
 		res.redirect('/posts')
 	},

 	postUpdate(req, res) {
 		res.redirect('/posts')
 	},

 	postDelete(req, res) {
 		res.redirect('/posts')
 	},

 	showProfile(req, res) {
 		console.log('this is profile data', res.locals.userPosts)
 		res.render('posts/myProfile', {
 			data: res.locals.userPosts,
 			user: req.session.user
 		})
 	},

 	show404(req, res) {
 		res.render('posts/showError')
 	}
}