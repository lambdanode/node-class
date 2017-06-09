/* change content of a file, change byte at pos 10 to utf-8 value of 7*/
var fs=require('fs');
fs.open('/etc/hello.txt', 'a', function(err, fd){
	if (err) { throw err; }
	var buffer = new Buffer('888');
	var written = 0;
	(function writeIt(){
		fs.write(fd, buffer, 0+written, buffer.length-written, 10+written, function(err, bytesWritten){
			if (err) {throw err;}
			written += bytesWritten;
			if (written===buffer.length){
				console.log('done');
			} else {
				writeIt();
			}
		});
	})();
});