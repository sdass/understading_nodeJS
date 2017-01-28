var exec = require("child_process").exec;

function start() {
	console.log("FROM requestHandler: 'start' was called.");


	function sleep(milliseconds){
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliseconds);
	}
	console.log("10 sec start sleep");
	//sleep(10000);
	console.log("ends 10 sec sleep");
	var content = "EMPTY  ALL";
	exec("ls -lah", function(error, stdout, stderr) { //asnych exec
			//console.log("STDout" + stdout);
			content = stdout;
			console.log("content" + content);
			return content; //child process
		});
	return content; // parent process //"start was called 10 second before";
}


function upload() {
	console.log("FROM requestHandler: 'upload' was called.");
	return "upload was called";
}

function download() {
	console.log("FROM requestHandler: 'download' was called.");
	return "download was called";
}


exports.start = start;
exports.upload = upload;
exports.download = download;