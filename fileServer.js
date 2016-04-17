var url = require('url');
var fs = require('fs');
var http = require('http');
var path = require('path');

var root = path.resolve(process.argv[2] || '.');
console.log('The static root: ' + root);

var server = http.createServer(function (request, response) {
	var filepath = path.join(root,url.parse(request.url).pathname);
	console.log('filepath: ' + filepath);

	fs.stat(filepath, function(err, stats) {
		if (!err && stats.isFile()) {
			console.log('200' + request.url);
			response.writeHead('200');
			fs.createReadStream(filepath).pipe(response);
		} else {
			response.writeHead('404');
			response.end('404 Not Found');
		}
	});
});


server.listen('8080');
console.log('Server localhost:8080 is running');
/*

var path = url.parse('http://localhost:8080/test/abc.html');

console.log(path.pathname);

var fs.createReadStream(filepath)

*/