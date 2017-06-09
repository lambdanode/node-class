//less efficient..takes more time almost 2mins
var util=require('util');
require('http').createServer(function(req, res) {
 res.writeHead(200, {'Content-Type': 'text/plain'});
 var left = 0;
util.log('started');
 var interval = setInterval(function() {
 	res.write(Date.now() + "\n");
	if (++left === 100) {
 		clearInterval(interval);
	 	res.end();
	 	util.log('ended');
	}
 }, 1000);

}).listen(4001);

