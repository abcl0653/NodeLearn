var dns = require('dns');

dns.resolve4('www.google.com',function(err,address) {
	console.log(address);
	//console.log(err);
});