module.exports = {
	loginPage(req, res) {
		res.render('login/login')
	},

	showPosts(req, res) {
		res.render('/posts/posts', {
			data: res.locals.posts
		})
 	}	
}