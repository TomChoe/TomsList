const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const postRouter = require('./routes/postRoutes');
const loginRouter = require('./routes/loginRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false,
}));
app.use(bodyParser.json());
app.use(methodOverride('method'));

//app.get('/login', loginRouter);

//app.get('/signup', loginRouter);

app.use('/posts', postRouter);

app.get('/', (req, res) => {
	res.render('index')
});

app.get('*', (req, res) => {
	res.status(404).send('Page not found!!')
});

app.listen(PORT, () => {
	console.log(`Server is up and running on port ${PORT}`)
})