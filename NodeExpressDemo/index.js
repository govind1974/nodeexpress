/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();
var service = require('myservice.js');
app.use(express.static('public'));
var fs = require("fs");
var multer  = require('multer');
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
var MongoClient = require('mongodb');

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + "/" + "index.html");
});

app.get('/emifrm.html', function(req, res) {
	res.sendFile(__dirname + "/" + "EmiFrm.html");
});

app.get('/emi', function(req,res){service.calcemi(req,res)});



app.get('/taxfrm.html', function (req, res) {
   res.sendFile( __dirname + "/" + "TaxFrm.html" );
});

app.post('/tax', function(req,res){service.calctax(req,res)});

app.get('/uploadfrm.html', function (req, res) {
	   res.sendFile( __dirname + "/" + "UploadFrm.html" );
	});

app.post('/file_upload', multer({ dest: './uploads/'}).single('file1'),function(req,res){service.upload(req,res,fs)});
		


app.get('/view', function(req, res) {
	service.viewemps(req, res,MongoClient);
	
});


app.get('/viewjson', function(req, res) {
	service.viewempsjson(req,res,MongoClient);
	
});
var server = app.listen(8081);
