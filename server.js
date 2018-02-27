const express = require('express');
const session = require('express-session');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const postRouter = require('./routes/postRoutes');
const loginRouter = require('./routes/loginRoutes');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(session({
	resave: false,
	saveUnitialized: false,
	secret: 'very, secret'
}));

let username = "doodeitstom";

function authenticate(username, password, fn) {
	console.log(`authenticating %s:%s`);
	const user = username;
	if (!user) return fn(new Error('cannot find user'));
	if (password !== user.password) return fn(new Error('Incorrect password'));
	if (err) return fn(err);
	return fn(null, user);
};

app.use((req, res, next) => {
	const err = req.session.error;
	const msg = req.session.success;
	delete req.session.error;
	delete req.session.success;
	res.locals.message = '';
	if (err) res.locals.message = `<p class = "msg error"> ${err} </p>`;
	if (msg) res.locals.message = `<p class = "msg success"> ${msg} </p>`;
	console.log(res.locals.message)
	next();
});

app.get('/login', (req, res) => {
	res.render('login/login')
});

app.post('/login', (req, res) => {
	console.log('posting login')
	const {username, password} = req.body;
	authenticate(username, password, (err, user) => {
		if (err) {
			req.session.error = 'Failed incorrect password';
			res.redirect('/login')
		} else {
			req.session.regenerate(() => {
			req.session.user = user;
			req.session.success = 'Welcome Back';
			res.redirect('back');
		  })
		}
	})
});

app.get('/', (req, res) => {
	console.log(req.session.user)
	res.render('index')
});

app.use('/signup', loginRouter);

app.use('/posts', postRouter);

app.get('*', (req, res) => {
	res.status(404).send('Page not found!!')
});

app.listen(PORT, () => {
	console.log(`Server is up and running on port ${PORT} in ${NODE_ENV}`)
})