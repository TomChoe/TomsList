const express = require('express');
const session = require('express-session');
const logger = require('morgan');							//dependencies
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const postRouter = require('./routes/postRoutes');
const signupRouter = require('./routes/signupRoutes');		//routes
const loginRouter = require('./routes/loginRoutes');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';		//process environments

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
	secret: 'very, secret'                 // user auth credit: JSM and whole lot of help from Casey Harding
}));

app.use((req, res, next) => {
 	const err = req.session.error;
 	const msg = req.session.success;
 	delete req.session.error;
 	delete req.session.success;
 	res.locals.message = '';
 	if (err) res.locals.message = `<p class = "msg error"> ${err} </p>`;
 	if (msg) res.locals.message = `<p class = "msg success"> ${msg} </p>`;
 	next();
});

app.use('/login', loginRouter);

app.use('/signup', signupRouter);

app.use('/posts', postRouter);

app.get('/', (req, res) => {
	console.log('this is the req.session',req.session)
	res.render('index')
});
app.get('*', (req, res) => {
	res.status(404).send('Page not found!!')
});

app.listen(PORT, () => {
	console.log(`Server is up and running on port ${PORT} in ${NODE_ENV}`)
})