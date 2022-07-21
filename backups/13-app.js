const express = require('express');
const app = express();
const { products } = require('./data');
const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware => res

// if we utilize "use" it will apply the middleware across the board
// will invoke logger for any route
// use must be invoked before the routes logger is being invoked within

// with multiple functions, they are executed in order they are written
app.use([logger, authorize]);

app.get('/', (req, res) => {
	res.send('Home');
});
app.get('/about', (req, res) => {
	res.send('About');
});

app.get('/api/products', (req, res) => {
	res.send('Products');
});
app.get('/api/items', (req, res) => {
	console.log(req.user);
	res.send('Items');
});

app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
