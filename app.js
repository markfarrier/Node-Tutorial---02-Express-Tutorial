const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// static assets
app.use(express.static('./methods-public'));

// parse form data
// extended: false = querystring library.  extended: true = qs library
app.use(express.urlencoded({ extended: false }));

// parse json - gives access in post method to req.body
app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
