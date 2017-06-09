/* append utf-8 encoded string 'hello world' to a file*/
var fs=require('fs');
fs.open('/etc/welcome.txt', 'a', function(err, fd){
	if (err) { throw err;}
	var buffer = new Buffer('hello world');
	var written = 0;
	(function writeIt(){
		fs.write(fd, buffer, 0+written, buffer.length-written, 0+written, function(err, bytesWritten){
			if(err) {throw err;}
			written += bytesWritten;
			if(written === buffer.length){
				console.log('done');
			} else {
				writeIt();
			}
		});
	})();
});