module.exports = function (app) {
	console.log('express router loaded');

	app.get('/', function (req, res) {
		res.send('./public/index.html');
	});
	// WRITE THE DAMN ROUTES.
};
