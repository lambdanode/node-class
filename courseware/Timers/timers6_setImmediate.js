/* schedules a callback function to run on the next run of the event loop*/
setImmediate(function(){
	console.log('yahoo');//this runs on the next event loop
});
/* this method is preferred to setTimeout(fn,0) 'coz it is more efficient*/