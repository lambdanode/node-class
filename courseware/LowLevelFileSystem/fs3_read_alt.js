var fs=require('fs');
fs.stat('/etc/passwd.txt',function(err,stats){
	if(err){throw err;}
	console.log('file size: ',stats.size);
});
fs.open('/etc/passwd.txt','r', function(err,fd){
	if(err) {throw err;}
	function readchunk(start,byteCount,fileposition){
		var buffer=new Buffer(byteCount);
		var bufferOffset=0;
		(function readIt(){
			fs.read(fd, buffer, 0+bufferOffset, buffer.length-bufferOffset, bufferOffset+fileposition, function(err, bytesRead){
				if(err){throw err;}
				bufferOffset+=bytesRead;
				if(bufferOffset===buffer.length){
					console.log(buffer.toString());
				} else {
					readIt();
				}
			});
		})();
	};
	readchunk(0,4,4);
	readchunk(0,4,0);
});
