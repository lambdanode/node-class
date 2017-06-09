/* make an http server that serves files. file path is provided in the url 
like this: http://localhost:4000/etc/welcome.txt */

var path = require('path'),
 fs = require('fs');

require('http').createServer(function(req, res) {
  var file = path.normalize(req.url);
  path.exists(file, function(exists) {
 	if (exists) {
 	  fs.stat(file, function(err, stat) {
 		  var rs;
	      if (err) { throw err; }
 		  if (stat.isDirectory()) {
    		res.writeHead(403);
 			res.end('Forbidden');
 		  } else {
 			rs = fs.createReadStream(file);
			res.writeHead(200);
 			rs.pipe(res);
 		  }
 	  });
    } else {
       	res.writeHead(404);
 		res.end('Not found');
 	}
  })
}).listen(4000);