var express = require('express');
var router = express.Router();

var db = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
	var records = [{name: "david", date: "10/10", department: "school", feedback: "shit"}];
    
	console.log("claling db");
	console.log("DB: " + JSON.stringify(db));
	db.query("SELECT rowid AS id, date, department_id, name, text FROM feedback", function(err, rows) {
		console.log(JSON.stringify(rows));
	    res.render('admin', { title: 'Feedback List', records: rows});
	});

});

module.exports = router;