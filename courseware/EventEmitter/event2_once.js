/* Listen to the first connection on the server.
   It listens for an event exactly once*/
var http=require('http');
var server=http.createServer();
server.once('connection', function(stream){
	console.log('ah, we have our first user!');
}).listen(8080);