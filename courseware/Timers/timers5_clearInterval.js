/* clearInterval unschedules a running interval previously scheduled with setInterval*/
var interval=setInterval(function(){
	console.log('tick');
},1000);
clearInterval(interval);