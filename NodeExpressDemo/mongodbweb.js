var MongoClient = require('mongodb');

// Connect to the db


var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/view', function(req, res) {
	MongoClient.connect("mongodb://@127.0.0.1:27017/mydb", function(err, db) {
		if (!err) {
			console.log("We are connected");
			var c = db.collection('products');
			res.write("<h1>Product Details</h1>");
			res.write("<hr/>");
			c.find().toArray(function(err, items) {
				console.log(items.length);
				res.write("<table cellpadding='10' bgcolor='#e3e3e3'>");
				for (var i = 0; i < items.length; ++i) {
					console.log(items[i].pid + "  " + items[i].pname + " " + items[i].price + " " + items[i].cat);
				    res.write("<tr>");
				    res.write("<td>"+ items[i].pid +"</td>");
				    res.write("<td>"+ items[i].pname +"</td>");
				    res.write("<td>"+ items[i].price +"</td>");
				    res.write("<td>"+ items[i].cat +"</td>");
				    res.write("</tr>");
				}
				res.write("</table>");
				res.end();
			});
		}
	});
	
})


app.get('/viewjson', function(req, res) {
	MongoClient.connect("mongodb://@127.0.0.1:27017/mydb", function(err, db) {
		if (!err) {
			console.log("We are connected");
			var c = db.collection('products');
			c.find({},{"_id": 0}).toArray(function(err, items) {
				console.log(items.length);
				res.write(JSON.stringify(items));
				res.end();
			});
		}
	});
	
})


var server = app.listen(8081);