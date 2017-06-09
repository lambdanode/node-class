/* Write a piece of the response body*/
var util=require('util');
var buffer=new Buffer('Greetings!');
buffer[9]=45;
require('http').createServer(function(req, res){
	console.log('client connected');
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.write(buffer);
	res.write('to all');
	res.end(util.inspect(req.headers));
}).listen(8080);