var MongoClient = require('mongodb');

// Connect to the db


var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/view', function(req, res) {
	MongoClient.connect("mongodb://@127.0.0.1:27017/mydb", function(err, db) {
		if (!err) {
			console.log("We are connected");
			var result= '<h1>Employees List</h1>';
			var c = db.collection('emps');
			c.find().toArray(function(err, items) {
				console.log(items.length);
				result += '<table cellpadding="10" bgcolor="#e3e3e3">';
				for (var i = 0; i < items.length; ++i) {
					console.log(items[i].emp_id + "  " + items[i].ename);
					result +="<tr><td>" + items[i].emp_id +"</td>";
					result +="<td>" + items[i].ename +"</td></tr>";
				}
				result +='</table>';
				res.send(result);
			});
		}
	});
	
})

var server = app.listen(8081, function() {

	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)

})