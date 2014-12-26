var http = require('http');
http.createServer(function(req,res){
	res.writeHead({
		'Content-type':'text/plain'
	});
	res.end('Merry Christmas');
}).listen(3000)