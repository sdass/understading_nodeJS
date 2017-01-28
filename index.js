
console.log('index World');

var router = require('./route');
var start = require('./fragment-server');
var requestHandler = require('./requestHandlers');

//console.log('router' + JSON.stringify(router));
var handle = {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;
handle['/download'] = requestHandler.download;

console.log('handle' + JSON.stringify(handle));
//router.route("a/b/c?m=n"); //testing

//start.startserver();
//start.startserver(router.route);
start.startserver(router.route, handle);

