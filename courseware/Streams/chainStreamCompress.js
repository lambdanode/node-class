/* Chanining is a mechanism to connect output of one stream to 
another stream and create a chain of multiple stream operations*/

var fs=require('fs');
var zlib=require('zlib');

/*compress the file input.txt to input.txt.gz*/
fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'));

console.log('File Compressed');