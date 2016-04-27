var express = require('express');
var utility = require('utility');

var app = express();

app.get('/',function (req,res) {
	var q = req.query.q;
	res.send(utility.md5(q));
});

app.listen('3000', function (req,res) {
	console.log('Server is running at 3000');
});