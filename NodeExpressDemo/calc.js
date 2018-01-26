/**
 * http://usejsdoc.org/
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var app = express();



app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(app.router);

app.get('/calc.html', function(req, res) {
	res.sendFile(__dirname + "/" + "Calc.html");
})

app.get('/docalc', function(req, res) {
	var v1 = req.query.txt1;
	var v2 = req.query.txt2;
	var v3 = v1 * v2;
	console.log(res);
	res.render("calcsubmit",{first: v1,second:v2,result:v3});
})

var server = app.listen(8081);