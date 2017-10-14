var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
	res.render('home/index', {
		title: "Easy Go",
		description: "Easy Go"
	});
});

module.exports = function (app) {
	app.use('/', router);
};