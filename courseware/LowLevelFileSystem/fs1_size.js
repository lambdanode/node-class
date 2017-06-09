/* Get the size of a file */
var fs=require('fs');
fs.stat('/etc/abc.txt', function(err,stats){  //c:\\etc\abc.txt
	if(err){
		throw err;
	}
	console.log('The file is '+stats.size+' bytes long');
});