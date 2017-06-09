/* Chanining is a mechanism to connect output of one stream
 to another stream and create a chain of multiple stream operations*/
var fs=require('fs');
var zlib=require('zlib');
/* Decompress the file input.txt.gz to test.txt*/
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('test.txt'));

console.log('File decompressed');