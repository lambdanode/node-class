 
var http = require('http'),
fs = require('fs');

 if (process.argv.length < 5) {
 console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' ');
 return;
 }

 var options = {
 host: process.argv[2], //localhost
 port: parseInt(process.argv[3], 10), //8080
 path: '/etc/',
 method: 'PUT'
 };

 var req = http.request(options);

 console.log('piping ' + process.argv[4]); //my.txt
 fs.createReadStream(process.argv[4]).pipe(req);

 //to execute type- node http10_server_uploads.js localhost 8080 my.txt