const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
	res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
	// console.log(req);
	// console.log(req.params);

	const { productID } = req.params;

	// below single-line callback doesn't work if you use curly-braces?
	// const singleProduct = products.find((product) => product.id === 1);
	const singleProduct = products.find(
		// productID is an Object so needs to be converted to a Number
		(product) => product.id === Number(productID)
	);
	if (!singleProduct) {
		return res.status(404).send('Product Does Not Exist');
	}
	// console.log(singleProduct);
	return res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
	console.log(req.params);
	res.send('hello world');
});

app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
