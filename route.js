
/*
function route(pathname){
	console.log('>>>>>>FROM route.js: routed to path= ' + pathname);

}

*/
function route(handle, pathname){
	console.log('>>>>>>FROM route.js: routed to path=' + pathname + ' handle=' + JSON.stringify(handle));
	if(typeof handle[pathname] === 'function'){
		var retstr = handle[pathname]();
		return retstr;

	}else{
		console.log("No requet handler found for " + pathname);
		return '404 Not found';
	}

}


exports.route = route;
