const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware
// static = files that the server doesn't need to change
// commonly placed in a single folder
app.use(express.static('./public'));

// if we're using index.html as a static asset (commented out old version, we no longer need if we have index in above folder)
// app.get('/', (req, res) => {
// 	// can use path.resolve or path.join
// 	res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

// adding to static assets
// SSR

// we still want the 404 error
app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
