const express = require('express');
const app = express();
const { products } = require('./data');

// req => middleware => res

// when you work with middleware, you must pass it on to the next middleware (or terminate the cycle via res.send) otherwise the browser will load indefinitely
const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);
	// res.send('Testing');
	next();
};

// req shouldn't be available in logger, but express passes the resource into the function
app.get('/', logger, (req, res) => {
	res.send('Home');
});
app.get('/about', logger, (req, res) => {
	res.send('About');
});

app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
