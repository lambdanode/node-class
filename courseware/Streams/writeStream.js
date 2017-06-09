/* Writing to Stream*/
var fs=require('fs');
var data="Hello Everybody. Welcome to Streams!!!.";

/* Create a Writable Stream */
var ws=fs.createWriteStream('output.txt');
/* Write data to stream with encoding utf8*/
ws.write(data,'utf8');
/* mark the end of file*/
ws.end();
/* Handle Stream Events - finish, error*/
ws.on('finish', function(){
	console.log('Write completed');
});
ws.on('error', function(err){
	console.log(err.stack)
});