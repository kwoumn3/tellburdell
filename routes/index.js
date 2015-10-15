var express = require('express');
var router = express.Router();
var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	handleForm(req.body);
	res.render('thanks', { title: 'Thanks' });
});

function handleForm(body) {
	//TODO: sanitize input
	var sql = "INSERT INTO feedback (department_id, name, text) VALUES (2,'" + body.name + "','" + body.feedback + "');"
	var params = {
		name: body.name
	};
	params.$department_id = 2;
	params.$name = body.name;
	params.$feedback = body.feedback;
	database.run(sql, params, function(err) {
		if (err == null) {
			console.log("Insert successful");
		} else {
			console.log("Error: " + err);
		}
	});
}

module.exports = router;
