var http=require('http');
var server=http.createServer();
server.listen(8030);

function connListener(stream){
	console.log('ah, we have our first user!');
	//server.removeListener('connection', connListener);
}
server.on('connection', connListener);
//pgm has the same effect as event2once.js