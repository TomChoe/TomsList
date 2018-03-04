const loginDB = require('../models/usersDB');

module.exports = {
	newUser(req, res, next) {
		loginDB.createUser(req.body)
		.then((user) => {
			res.locals.user = user
			console.log('User has been created')
			next()
		})
		.catch(err => next(err))
	},

	getUserEmail(req, res, next) {
		loginDB.findUserEmail(req.params.id)
		.then((email) => {
			res.locals.email = email
			console.log('User EMAIL has been fetched')
			next()
		})
		.catch(err => next(err))
	},

 	authenticate(req, res, next) {
  		loginDB.authenticateByUsername(req.body)
   		.then(user => {
     		req.session.user = user;
		    req.session.isLoggedIn = true;
      		req.session.success = 'Authenticated as ' + user.username;
      		res.redirect('/posts')
      	next();
      })
  	  .catch(err => {
      req.session.error = 'Authentication failed. Please try again';
      next();
      });
  },

	isLoggedIn(req, res, next) {
		if (req.session.user) {
			console.log('session user: ',req.session.user)
			next()
		} else {
			req.session.error = 'Login required'
			res.redirect('/')
		}
	},

	logOut(req, res, next) {
		req.session.destroy();
		res.redirect('/');
		next()
	},

	isUser(req, res, next) {
		if (req.session.username === res.locals.username) {
			next()
		} else {
			req.session.error = 'Restricted, only user is allowed to edit'
			res.redirect(`/posts`)
		}
	}
}