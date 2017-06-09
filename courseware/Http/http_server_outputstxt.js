/* an http server that outputs plain text with 100 new-line separated unix timestamps every second
More efficient than the alternative.. takes exactly 10secs
*/
var util=require('util');
require('http').createServer(function(req, res) {
 	res.writeHead(200, {'Content-Type': 'text/plain'});
 	var left = 10;
 	util.log('started');
 	var interval = setInterval(function() {
 		for(var i = 0; i <10; i++){res.write(Date.now() + "\n")}; // 10new lines are printed in one sec
 		 if (-- left === 0) {	//callback function is called 10 times ie.10secs
 		clearInterval(interval);
 		res.end();
 		util.log('ended');
 	}
	}, 1000);

 }).listen(4001);
//util has been used only to check how much time it takes, it can be just removed