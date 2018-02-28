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

 	showPost(req, res) {
 		res.render('posts/showPost', {
 			data: res.locals.post
 		})
 	},

 	createForm(req, res) {
 		res.render('posts/createPost')
 	},

 	updatePost(req, res) {
 		res.render('posts/updatePost')
 	},

 	postCreate(req, res) {
 		res.redirect('/posts');
 	},

 	userCreate(req, res) {
 		res.redirect('/posts')
 	}
}