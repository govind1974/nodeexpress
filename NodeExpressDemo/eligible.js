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

app.get('/ajaxdemo.html', function(req, res) {
	res.sendFile(__dirname + "/" + "AjaxDemo.html");
})
app.get('/eligible', function(req, res) {
	var age = req.query.vage;
	var qual = req.query.vqual;
	result = "not eligible";
	if (age >= 20 && age <= 45
			&& (qual=="be" || qual=="btech")) {
	result = "eligible";
	}
	res.send(result);
})

var server = app.listen(8081);