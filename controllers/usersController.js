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

	getUser(req, res, next) {
		loginDB.findUser(req.body.username)
		.then((user) => {
			req.session.user = user
			console.log('req.session.user : ', req.session.user)
			next()
		})
		.catch(err => next(err))
	},

	checkUser(req, res, next) {
    	req.session.oldUser = req.body;
    	if (req.body.username != req.session.user.username) {
    	  users.findByUsername(req.body)
    	  .then(user => {
    	    req.session.error = 'That username already exists!';
    	    res.redirect('back');
    	  })
    	  .catch(err => {
   	     next();
   	   });
   	 } else {
  	    next();
  	  }
  },

	isLoggedIn(req, res, next) {
		if (req.session.user) {
			console.log('session user: ',req.session.user)
			next()
		} else {
			req.session.error = 'Login required'
			res.redirect('/login')
		}
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