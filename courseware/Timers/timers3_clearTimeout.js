/* we start two timers, timeoutA after 2sec and timeoutB after 1sec
   but timeoutB which fires first unschedules timeoutA, so timeoutA never executes*/
var timeoutA=setTimeout(function(){
	console.log('timeout A');
}, 2000);
var timeoutB=setTimeout(function(){
	console.log('timeout B');
	clearTimeout(timeoutA);
}, 1000);