/* setTimeout returns a timeout handle that can be used to disable it*/
var timeoutHandle=setTimeout(function(){
	console.log('yehaa');
}, 1000);
clearTimeout(timeoutHandle);
/* the timeout will never execute 'coz we clear it right after we set it*/