const express = require('express');
// can do this instead
// const app = require('express')();

// creates server instance, like createHTML
const app = express();

// callback invoked every time a get request is performed on the root
app.get('/', (req, res) => {
	console.log('user hit the resource');
	res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
	res.status(200).send('About Page');
});

// default 404 is "Cannot GET [path]"
// can override this default however
// path '*' = any path/all paths.  All = any http message
// res.status will send the status code, can chain with res.send
app.all('*', (req, res) => {
	res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000');
});

// app.get
// app.post
// app.put
// app.delete
// app.all - works with all the above
// app.use - responsible for middleware
// app.listen
