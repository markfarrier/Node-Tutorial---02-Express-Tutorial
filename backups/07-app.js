const express = require('express');
// const path = require('path');

const app = express();
// below appears to not require the .js
// probably just defaults to .js
const { products } = require('./data');

app.get('/', (req, res) => {
	// res.json([{ name: 'john' }, { name: 'susan' }]);
	res.json(products);
});

app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
