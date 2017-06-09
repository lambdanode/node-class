/* Piping is a mechanism where we provide output of one stream 
as the input to another stream.*/
var fs=require('fs');
/* Create Readable and Writable streams*/
var rs=fs.createReadStream('input.txt');
var ws=fs.createWriteStream('output.txt');
/* Pipe the read and write operations
read input.txt and write to output.txt*/
rs.pipe(ws);
console.log('finished');