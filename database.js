var sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('feedback.db');

// var db = {

// };
console.log("got new db");

exports.query = function(sql, callback) {
	db.all(sql, callback);
};