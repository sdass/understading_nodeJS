
var http = require('http');

http.createServer(function(req, resp){
	resp.writeHead(200, {"Content-Type" : "text/plain"});
	resp.write('Hello World');
	resp.end();
}).listen(5000, function(){
	console.log('listening on port 5000');
	console.log('use http://localhost:5000');
});

console.log('1st server started');