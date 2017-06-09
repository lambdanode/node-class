/* Reading from Stream */
var fs=require('fs');
var data="";
/* Create a readable stream*/
var rs=fs.createReadStream('input.txt');
/* Set encoding to utf8*/
rs.setEncoding('utf8');
/* Handle Stream events- data, end, error*/
rs.on('data', function(chunk){
	data+=chunk;
});
rs.on('end', function(){
	console.log(data);
});
rs.on('error', function(err){
	console.log(err.stack);
});
console.log('Program Ended.'); //displayed first