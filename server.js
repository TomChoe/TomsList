const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//const tomsRouter = require('./routes/tomsRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false,
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Welcome to index page')
})

app.get('*', (req, res) => {
	res.status(404).send('Page not found!!')
});

app.listen(PORT, () => {
	console.log(`Server is up and running on port ${PORT}`)
})