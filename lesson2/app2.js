var express = require('express');

var superagent = require('superagent');

var cheerio = require('cheerio');

var app = express();

app.get('/',function (req,res,next) {
	

	superagent
	.get('https://cnodejs.org/')
	.end(function (err,sres) {
		if (err) {
			console.log('get website error');
			return next(err);
		}
		//console.log(sres.text);
		$ = cheerio.load(sres.text)
		var items = [];

		$('#topic_list .topic_title').each(function (idx, element) {
			//console.log('in the loop');
			var $element = $(element);
			//console.log($element.attr('title'));
			items.push({
				title: $element.attr('title'),
				href: $element.attr('href')
			});
		});

		res.send(items);
	});

	
});

app.listen('3000');