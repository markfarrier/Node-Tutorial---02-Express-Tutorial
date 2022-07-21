const express = require('express');
const app = express();
const morgan = require('morgan');
const { products } = require('./data');
const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// our own
// app.use([logger, authorize]);

// express
// app.use(express.static('./public'));

// third party
app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.send('Home');
});
app.get('/about', (req, res) => {
	res.send('About');
});

app.get('/api/products', (req, res) => {
	res.send('Products');
});
// this time passing in the authorize + logger into the function
app.get('/api/items', [logger, authorize], (req, res) => {
	console.log(req.user);
	res.send('Items');
});

app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
