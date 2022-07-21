const http = require('http');

const server = http.createServer((req, res) => {
	// console.log('user hit the server');
	// console.log(req.method);
	// console.log(req.url);

	const url = req.url;

	//home page
	if (url === '/') {
		// status code 200 = successful request
		// make sure to use the correct status code!
		// headers are 2nd argument
		// content-type header = type of response received, so browser knows how to render
		// text/plain, text/html are "mime types".  Think of as media types
		// res.writeHead(200, { 'content-type': 'text/plain' });
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>home page</h1>');

		// must invoke this end method otherwise the browser will load indefinitely.
		// res.end('<h1>home page</h1>');
		res.end();
	}

	// about page
	else if (url === '/about') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>about page</h1>');
		res.end();
	}

	// 404 - resource not found
	else {
		res.writeHead(404, { 'content-type': 'text/html' });
		res.write('<h1>page not found</h1>');
		res.end();
	}
});

// argument is the port the server is being listened on
// 5000 is an arbitrary number for development purposes - there are specific ports for various applications however
server.listen(5000);
