const express = require('express');
const app = express();
let { people } = require('./data');

app.get('/api/people', (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
