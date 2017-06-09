/* when listening for 'request' events, the callback gets one of the request objects
*  the first argument: req.headers - used to inspect the headers of your request
*/
var util=require('util');
require('http').createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end(util.inspect(req.headers)); //connect your browser to port 8080 and inspect headers of your request
}).listen(8080);