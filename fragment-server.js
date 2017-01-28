
var http = require('http');

var url = require('url');


//var exports = module.exports = {};
function startserver(route, handle) {

		console.log( arguments.length + ' ' + 'route=' + route);

		function uponRequest(req, res){
		console.log('request recvd on ' + req.url);	

		var pathname = url.parse(req.url).pathname;
		console.log('pathname= ' + pathname);	

		// use: curl  "http://localhost:5000/hello/sdass/hobby/cricket?ab=c&bc=yu"
		var query = url.parse(req.url).query;
		console.log('query= ' + query);




		res.writeHead(200, {"Content-Type" : "text/plain"});
		res.write('Hello World.\n');
		console.log("handle: " + handle);
		console.log("pathname: " + pathname);
		var retStr = route(handle, pathname);
		res.write(retStr);

		res.end();
	};

	http.createServer(uponRequest)
	    .listen(5000, function(){
	    	console.log('listening on port 5000');
			console.log('use http://localhost:5000');
			console.log('use http://localhost:5000/start|upload|download');
	    	});
	console.log('1st server started');

/*
	function route(pathname){
		console.log('routing request to --> ' + pathname);	
	}
	*/

}

exports.startserver = startserver; //1. outside the function Lef&Right operand same name
