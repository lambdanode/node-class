/* an http server that saves the request body into a file*/ 
 var fs = require('fs');

 var sequence = 0;
 require('http').createServer(function(req, res) {
 var fileName = '/etc/' + sequence + '.txt';
 console.log("writing " + fileName);
 var writeStream = fs.createWriteStream(fileName);

 req.pipe(writeStream);
 req.on('end', function() {
 res.writeHead(200);
 res.end();
 });
 sequence ++;
 }).listen(3000);
