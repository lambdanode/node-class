/* read bytes 10 to 14 from a file c://etc/abc.txt and print them */
var fs=require('fs');
fs.open('/etc/abc.txt', 'r', function(err, fd){
	if(err){throw err;}
	var buffer=Buffer(5);
	var readBytes=0; //bufferOffset
	(function readIt(){
		fs.read(fd, buffer, readBytes, buffer.length-readBytes, 10+readBytes, function(err, bytesRead){
			if(err){throw err;}
			readBytes+=bytesRead;
			if(readBytes===buffer.length){
				console.log(buffer.toString());
			}else {
				readIt();
			}
		});
	})();
});