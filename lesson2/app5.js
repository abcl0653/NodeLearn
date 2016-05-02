var async = require('async');

var urls = [];
for (var i = 1; i <= 10; i++) {
	urls.push('http://fakewebsite_'+i);
}

var countConcurrent = 0;

var fetchUrl = function (url, callback) {
	var delay = parseInt(Math.random()*10000000 % 2000,10);
	countConcurrent++;
	console.log('Delay:'+delay+'ms URL:'+url+' countConcurrent='+countConcurrent);

	setTimeout(function () {
		countConcurrent--;
		callback(null,url+'_content');
	},delay);
	
};



async.mapLimit(urls,5, function (url,callback) {
	fetchUrl(url,callback);
}, function (err, result) {
	console.log('Result:');
	console.log(result);
});