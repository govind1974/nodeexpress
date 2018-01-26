/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/emifrm.html', function(req, res) {
	res.sendFile(__dirname + "/" + "EmiFrm.html");
})

app.get('/emi', function(req, res) {
	var amt = req.query.txtamt;
	var years = req.query.txtyears;
	var ci = amt * Math.pow(1 + 0.10, years);
	var emi = ci / (years * 12);
	res.write("<h1>Emi calculation</h1>");
	res.write("<hr/>");
	res.write("<table cellpadding='10' bgcolor='#e3e3e3'>");
	res.write("<tr><td>name</td><td>" + req.query.txtname + "</td></tr>");
	res.write("<tr><td>Loan Amount</td><td>" + amt + "</td></tr>");
	res.write("<tr><td>Years</td><td>" + years + "</td></tr>");
	res.write("<tr><td>CI</td><td>" + ci.toFixed() + "</td></tr>");
	res.write("<tr><td>EMI</td><td>" + emi.toFixed() + "</td></tr>");
	res.write("</table>");
	res.end();
})

var server = app.listen(8081);