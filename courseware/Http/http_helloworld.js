/* creating an http server */
var http=require('http');
var server=http.createServer();

server.on('request', function(requ, res){
	console.log('Got the request from user i am sending details');
	res.writeHead(200, {'Content-Type': 'application/json'});
	
	var obj = {name : "Amar" , age : 22};
	var obj1 = {name : "Kumar" , age : 35};

    //obj.subObj = obj1;
    
	res.write(JSON.stringify(obj)+JSON.stringify(obj1));
	res.end();
});

server.listen(8090);