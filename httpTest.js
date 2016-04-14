var http = require('http');

var server = http.createServer( function (request, response) {
	console.log(request.method+': '+request.url);
	response.writeHead(200, {"content-Type": "text/html"});
	response.end('<h1>Hello world!</h1>');
});

server.listen(8080);

console.log('The server is running');

