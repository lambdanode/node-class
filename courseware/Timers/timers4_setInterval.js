/* setInterval is similar to setTimeout but schedules a given function
   to run every x secs*/
   setInterval(function(){
   	console.log('tick');
   },1000);
   /* it will inddefinitely keep the console logging 'tick' unless you terminate node*/