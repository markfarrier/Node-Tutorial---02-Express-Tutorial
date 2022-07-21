const authorize = (req, res, next) => {
	const { user } = req.query;
	if (user === 'john') {
		// adding a property of user onto the req object
		req.user = { name: 'john', id: 3 };
		next();
	} else {
		res.status(401).send('Unauthorized');
	}
};

module.exports = authorize;
