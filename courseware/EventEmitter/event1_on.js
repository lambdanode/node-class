/* Binding to the readstream's data and end events,
   passing in callback functions to handle each of these cases.
   When one of these events happens, the readstream will call the callback function we pass in 
*/
var fs=require('fs');
var readStream=fs.createReadStream('/Users/amarnathareddy/Downloads/Courseware/EventEmitter/passwd.txt'); //c:\etc\passwd.txt
//data event
readStream.on('data', function(data){ 
	console.log(data);
});
readStream.on('start', function(){
	console.log('start');
});
//end event
readStream.on('end', function(){
	console.log('file closed');
});

 readStream.setEncoding('utf-8');// otherwise console will print a buffer